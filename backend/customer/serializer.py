from rest_framework import  serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from product.serializer import ProductSerializer
from .models import Wishlist

class UserRegisterSerialiezer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id', 'email', 'username', 'first_name', 'last_name', 'password', 'is_active')


class UserSerialiezer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id', 'email', 'is_active', 'first_name', 'last_name')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerialiezer(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)

class WishListSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model=Wishlist
        fields='__all__'