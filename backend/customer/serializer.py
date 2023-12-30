from rest_framework import  serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserRegisterSerialiezer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id', 'email', 'username', 'first_name', 'last_name', 'password', 'is_active')


class UserSerialiezer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id', 'email', 'is_active')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerialiezer(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

