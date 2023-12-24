from django.shortcuts import render
from rest_framework import   viewsets
from .models import Slider, SocialMedia
from rest_framework.response import  Response
from .serializer import SliderSerializer, SocialMediaSerializer


class SocialMediaViewSet(viewsets.ModelViewSet):
   
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer
    http_method_names=['get']
    
    
class SliderViewSet(viewsets.ModelViewSet):
   
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer
    http_method_names=['get']
