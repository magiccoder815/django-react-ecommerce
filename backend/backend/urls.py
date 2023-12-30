from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from rest_framework import routers
from customer.views import MyTokenObtainPairView, CustomerUserRegisterView
from product.views import CategoryViewSet, BrandViewSet, ProductViewSet
from sitesettings.views import SocialMediaViewSet, SliderViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView


router = routers.DefaultRouter()
router.register('api/category/select', CategoryViewSet)
router.register('api/brand/select', BrandViewSet)
router.register('api/product/select', ProductViewSet)
router.register('api/slider/select', SliderViewSet)
router.register('api/socialmedia/select', SocialMediaViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('api/customer/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/customer/create/', CustomerUserRegisterView.as_view(), name='customer-register'),


]+router.urls
    
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
