from django.db import models
from autoslug import AutoSlugField
from product.valid import valid_image_extension
from cloudinary.models import CloudinaryField
from django.core.validators import MaxValueValidator, MinValueValidator
def category_image_path(instance, filename):
    return f"category/{instance.id}/server/{filename}"

class Category(models.Model):
    title= models.CharField(max_length=100)
    slug =AutoSlugField(populate_from='title')
    photo=models.ImageField(
        upload_to = category_image_path,
        null=True,
        blank=True,
        validators={valid_image_extension}
         
    )
    menuicon=models.CharField(max_length=200,
     help_text="Font Awesome sitesinden alabilirsin icon örnek kullanım : fa-regular fa-circle-xmark   fa-solid fa-circle-xmark")

    def __str__(self):
        return self.title
    
class Brand(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='title')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    available = models.BooleanField(default=True)
    is_top = models.BooleanField(default=False)
    rating = models.FloatField(null=True, 
                               validators=[MinValueValidator(1), MaxValueValidator(5)],
                               blank=True )
    count_in_stock = models.PositiveIntegerField()
    SIZE_CHOICES = (
        ("xs", "XS"),
        ("s", "S"),
        ("m", "M"),
        ("l", "L"),
        ("xl", "XL"),
    )
    size = models.CharField(max_length=2, choices=SIZE_CHOICES)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    image = CloudinaryField('image')
    image2 = CloudinaryField('image2')
    image3 = CloudinaryField('image3')



    def __str__(self):
        return self.title