from rest_framework import  serializers
from .models import Category, Brand , Product



class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = '__all__'
    def get_product_count(self,obj):
        return obj.product_set.count()

class BrandSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Brand
        fields = '__all__'
    def get_product_count(self,obj):
        return obj.product_set.count()
    

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','title']

class ProductBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id','title']



class ProductSerializer(serializers.ModelSerializer):
    category=ProductCategorySerializer()
    brand=ProductBrandSerializer()
    class Meta:
        model = Product
        fields = '__all__'
