from django.shortcuts import render
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import  serializers, viewsets
from .models import Category, Brand , Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryViewSet(viewsets.ModelViewSet):
    """
    A ViewSet for performing CRUD (Create, Read, Update, Delete) operations on Category objects.

    The ModelViewSet class provided by Django Rest Framework combines the actions for
    listing, creating, retrieving, updating, and deleting instances of a model.
   
    The ModelViewSet class provides default implementations for the basic CRUD operations.
    The 'list' action retrieves a list of all Category objects, 'create' handles the creation
    of a new Category object, 'retrieve' fetches a specific Category object, 'update' and 'partial_update'
    handle full and partial updates, and 'destroy' deletes a Category object.

    By using the ModelViewSet, repetitive code for common actions is minimized, and the
    viewset is configured to work seamlessly with the Django Rest Framework's routers for URL routing.

    Note: Ensure that you include the URL configuration for this viewset in your project's main
    URL configuration to make the API endpoints accessible.
    """
    # Queryset to retrieve all Category objects from the database
    queryset = Category.objects.all()

    # Serializer class to use for serializing and deserializing Category objects
    serializer_class = CategorySerializer

 


