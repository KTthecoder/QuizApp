from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class ChangePasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required = True)
    new_password = serializers.CharField(required = True)

    def validate_new_password(self, value):
        validate_password(value)
        return value