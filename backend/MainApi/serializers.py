from rest_framework import serializers
from .models import *

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizModel
        fields = "__all__"