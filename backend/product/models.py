from django.db import models
from autoslug import AutoSlugField

def category_image_path(instance, filename):
    return f"category/{instance.id}/server/{filename}"

class Category(models.Model):
    title= models.CharField(max_length=100)
    slug =AutoSlugField(populate_from='title')
    photo=models.ImageField(
        upload_to = category_image_path,
        null=True,
        blank=True,
         
    )
    menuicon=models.CharField(max_length=200,
     help_text="Font Awesome sitesinden alabilirsin icon örnek kullanım : fa-regular fa-circle-xmark   fa-solid fa-circle-xmark")

    def __str__(self):
        return self.title