from django.db import models
from django.contrib.auth.models import User
from product.models import Product

# Create your models here.

class Wishlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.user.username}'s Whishlist"
    
    


