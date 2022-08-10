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

class FavoriteQuizesSerializer(serializers.ModelSerializer):
    quizName = serializers.SerializerMethodField('get_quiz_name')
    quizDifficultyLvl = serializers.SerializerMethodField('get_quiz_difficultyLvl')
    quizViews = serializers.SerializerMethodField('get_quiz_views')
    quizQuizImg = serializers.SerializerMethodField('get_quiz_image')
    quizSlug = serializers.SerializerMethodField('get_quiz_slug')
    quizCategoryName = serializers.SerializerMethodField('get_quiz_category_name')
    quizDescription = serializers.SerializerMethodField('get_quiz_category_description')
    username = serializers.SerializerMethodField('get_user_username')
    quizQuestionCount = serializers.SerializerMethodField('get_question_count')
    class Meta:
        model = FavoriteQuizModel
        fields = ['id', 'user', 'username', 'quiz', 'quizName', 'quizQuestionCount', 'quizDescription', 'quizDifficultyLvl', 'quizViews', 'quizQuizImg', 'quizSlug', 'quizCategoryName']
    
    def get_quiz_name(self, favorite):
        return favorite.quiz.name

    def get_quiz_difficultyLvl(self, favorite):
        return favorite.quiz.difficultyLvl

    def get_quiz_views(self, favorite):
        return favorite.quiz.views

    def get_quiz_image(self, favorite):
        return favorite.quiz.QuizImg.url

    def get_quiz_slug(self, favorite):
        return favorite.quiz.slug

    def get_quiz_category_name(self, favorite):
        return favorite.quiz.cateogry.name

    def get_user_username(self, favorite):
        return favorite.user.username

    def get_quiz_category_description(self, favorite):
        return favorite.quiz.description

    def get_question_count(self, favorite):
        return favorite.quiz.questionCount



