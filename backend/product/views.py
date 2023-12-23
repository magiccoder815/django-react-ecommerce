from django.shortcuts import render
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import  serializers, viewsets
from .models import Category, Brand , Product
from rest_framework.response import  Response
from .serializer import CategorySerializer
from .schema import category_doc


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

 


