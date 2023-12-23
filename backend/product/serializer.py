from rest_framework import  serializers
from .models import Category, Brand , Product



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'