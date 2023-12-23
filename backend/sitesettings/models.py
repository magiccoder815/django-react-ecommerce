from django.db import models
from cloudinary.models import CloudinaryField


class Slider(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    sliderbg = CloudinaryField('sliderbg')
    sliderone = CloudinaryField('sliderone')

    def __str__(self):
        return self.title


class SocialMedia(models.Model):
    title = models.CharField(max_length=100)
    menuicon=models.CharField(max_length=200,
    help_text="Font Awesome sitesinden alabilirsin icon örnek kullanım : fa-regular fa-circle-xmark   fa-solid fa-circle-xmark")
    urllink = models.CharField(max_length=500)

    def __str__(self):
        return self.title