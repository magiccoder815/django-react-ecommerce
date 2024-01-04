from django.shortcuts import get_object_or_404, render
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import  serializers, viewsets
from .models import Category, Brand , Product
from rest_framework.response import  Response
from .serializer import CategorySerializer, BrandSerializer, ProductSerializer
from .schema import category_doc
from rest_framework.generics import RetrieveAPIView

class CategoryViewSet(viewsets.ModelViewSet):
   
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names=['get']

    @category_doc
    def list(self, request):
        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug=slug)
        
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data)

 
 
class BrandViewSet(viewsets.ModelViewSet):
   
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    http_method_names=['get']

    def list(self, request):
        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug=slug)
        
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data)
    
class ProductViewSet(viewsets.ModelViewSet):
   
    queryset = Product.objects.all()
    http_method_names=['get']
   
    lookup_field='slug'

    def list(self, request):

        slug = request.query_params.get("slug")
        categories = request.query_params.getlist("category")
        brands = request.query_params.getlist("brand")
        min_price = request.query_params.get("min_price")
        max_price = request.query_params.get("max_price")
        avaible = request.query_params.get("avaible")
        is_top = request.query_params.get("is_top")
        qty = request.query_params.get("qty")
        size = request.query_params.get("size")
        title = request.query_params.get("title")
        rating = request.query_params.get("rating")
    
        if slug:
            self.queryset = self.queryset.filter(slug=slug)
        if categories:
            self.queryset = self.queryset.filter(category__in=categories)
        if brands:
            self.queryset = self.queryset.filter(brand__in=brands)
        if min_price:
            self.queryset = self.queryset.filter(price__gte=min_price)
        if max_price:
            self.queryset = self.queryset.filter(price__lte=max_price)
        if avaible:
            avaible=avaible.lower()=="true"
            self.queryset = self.queryset.filter(available=avaible)
        if is_top:
            is_top=is_top.lower()=="true"
            self.queryset = self.queryset.filter(is_top=is_top)
        if qty:
            self.queryset = self.queryset[:int(qty)]
        if size:
            self.queryset = self.queryset.filter(size=size)
        if title:
            self.queryset = self.queryset.filter(title__icontains=title)
        if rating:
            self.queryset = self.queryset.filter(rating=rating)   ######
        
        serializer = ProductSerializer(self.queryset, many=True)
        return Response(serializer.data)

  
    
    def retrieve(self, request, *args, **kwargs):
        slug=kwargs.get('slug')
        product = get_object_or_404(Product, slug=slug)
        serializer = ProductSerializer(product)
        return Response (serializer.data)
        

class ProductByIdView(RetrieveAPIView):
    serializer_class =ProductSerializer
    lookup_field='id'
    #permission_classes=[]

    def get_queryset(self):
        return Product.objects.all()
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

