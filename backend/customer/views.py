from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import ChangePasswordSerializer, WishListSerializer, MyTokenObtainPairSerializer, UserRegisterSerialiezer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, status
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from .models import Wishlist
from product.models import Product


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class= MyTokenObtainPairSerializer

@permission_classes((permissions.AllowAny,))
class CustomerUserRegisterView(APIView):
    def post(self, request):
        data = request.data.copy()
        password = data.get('password')
        data['username']= data.get('email')
        if password:
            data['password'] = make_password(password)
        serializer = UserRegisterSerialiezer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class ChangePasswordApiView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer  = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            user=self.request.user
            old_password = serializer.data.get("old_password")
            new_password1 = serializer.data.get("new_password1")
            new_password2 = serializer.data.get("new_password2")

            form = PasswordChangeForm(user, {
                'old_password':old_password,
                'new_password1':new_password1,
                'new_password2':new_password2,
            })

            if form.is_valid():
                user = form.save()
                update_session_auth_hash(request, user)
                return Response({'message':'Change Password Successfull'}, status=status.HTTP_200_OK)
            else:
                return Response({'message':'Change Password Unsuccessfull'}, status=status.HTTP_400_BAD_REQUEST)
        else:
             return Response({'message':'Change Password Unsuccessfull'}, status=status.HTTP_400_BAD_REQUEST)



class WishlistApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        wishlist, created = Wishlist.objects.get_or_create(user=request.user)
        serializer = WishListSerializer(wishlist)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        wishlist, created = Wishlist.objects.get_or_create(user=request.user)

        # Product ID'yi request verilerinden al
        product_id = request.data.get('product_id', None)

        if product_id is None:
            return Response({"detail": "Product ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        if product in wishlist.product.all():
            return Response({"detail": "Product already in wishlist."}, status=status.HTTP_400_BAD_REQUEST)

        wishlist.product.add(product)
        wishlist.save()

        serializer = WishListSerializer(wishlist)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    def delete(self, request, **kwargs):
        try:
            wishlist = Wishlist.objects.get(user=request.user)
        except Wishlist.DoesNotExist:
            return Response({"detail": "Wishlist not found."}, status=status.HTTP_404_NOT_FOUND)

        product_id = kwargs.get('product_id')
        
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        wishlist.product.remove(product)  # Buradaki 'products' kelimesi düzeltildi
        wishlist.save()

        serializer = WishListSerializer(wishlist)
        return Response(serializer.data, status=status.HTTP_200_OK)