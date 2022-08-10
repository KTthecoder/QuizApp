from rest_framework import serializers
from .models import *

class QuizSerializerMaxEight(serializers.ModelSerializer):
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

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionModel
        fields = ['id', 'title', 'ansA', 'ansB', 'ansC', 'ansD', 'correctAns', 'questionImg', 'quiz']

class QuizSerializer(serializers.ModelSerializer):
    questionmodel = QuestionSerializer(read_only = True, many = True)
    class Meta:
        model = QuizModel
        fields = ['id', 'name', 'description', 'difficultyLvl', 'views', 'QuizImg', 'slug', 'questionCount', 'questionmodel']


