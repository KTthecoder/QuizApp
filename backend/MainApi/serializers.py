from rest_framework import serializers
from .models import *

class QuizSerializer(serializers.ModelSerializer):
    categoryName = serializers.SerializerMethodField('get_category_Name')
    class Meta:
        model = QuizModel
        fields = ['id', 'name', 'description', 'difficultyLvl', 'views', 'QuizImg', 'slug', 'cateogry', 'categoryName', 'questionCount']

    def get_category_Name(self, quiz):
        return quiz.cateogry.name

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizCategoryModel
        fields = '__all__'

