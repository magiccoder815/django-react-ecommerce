from django.contrib import admin
from .models import Category, Product, Brand

# Register your models here.

admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product)