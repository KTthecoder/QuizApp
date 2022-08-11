from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *
from django.core.exceptions import ObjectDoesNotExist
import random

# Create your views here.
@api_view(['GET'])
def AllQuizes(request):
    if request.method == 'GET':
        quizes = QuizModel.objects.all()[:8]
        data = {}
        if quizes.exists():
            serializer = QuizSerializerMaxEight(quizes, many = True)
            return Response(serializer.data)
        else:
            data['response'] = 'There is not any quizes in database'
            return Response(data)
    else:
        data = {}
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
def QuizesByCategory(request, categorySlug):
    if request.method == 'GET':
        data = {}
        try:
            categoryId = QuizCategoryModel.objects.get(slug = categorySlug)
            quizes = QuizModel.objects.filter(cateogry = categoryId.id)[:8]
            if quizes.exists():
                serializer = QuizSerializerMaxEight(quizes, many = True)
                return Response(serializer.data)
            else:
                data['response'] = 'There is not any quizes in database'
                return Response(data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
def AllCategories(request):
    if request.method == 'GET':
        data = {}
        try:
            categories = QuizCategoryModel.objects.all()
            if categories.exists():
                serializer = CategorySerializer(categories, many = True)
                return Response(serializer.data)
            else:
                data['response'] = 'There is not any categories in database'
                return Response(data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
def QuizDetails(request, quizSlug):
    if request.method == 'GET':
        data = {}
        try:
            quiz = QuizModel.objects.get(slug = quizSlug)
            quiz.views += 0.5
            quiz.save()
            serializer = QuizSerializer(quiz)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def FavoriteQuizes(request, username):
    if request.method == 'GET':
        data = {}
        try:
            user = User.objects.get(username = username)
            quizes = FavoriteQuizModel.objects.filter(user = user)
            
            if quizes.exists():
                serializer = FavoriteQuizesSerializer(quizes, many = True)
                return Response(serializer.data)
            else:
                data['response'] = 'User does not have any quizes'
                return Response(data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
def CategoryQuizes(request, categorySlug):
    if request.method == 'GET':
        data = {}
        try:
            category = QuizCategoryModel.objects.get(slug = categorySlug)
            quizes = QuizModel.objects.filter(cateogry = category)
            if quizes.exists():
                serializer = QuizSerializerOnly(quizes, many = True)
                return Response(serializer.data)
            else:
                data['response'] = 'There is not any quizes in this category'
                return Response(data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
def CategoryBySlug(request, categorySlug):
    if request.method == 'GET':
        data = {}
        try:
            categories = QuizCategoryModel.objects.get(slug = categorySlug)
            serializer = CategorySerializer(categories)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            data['response'] = 'There is not any categories in database'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddToFavorite(request):
    if request.method == 'POST':
        data = {}
        try:
            serializer = FavoriteQuizesSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def RandomQuestionInQuiz(request, quizSlug):
    if request.method == 'GET':
        data = {}
        try:
            quiz = QuizModel.objects.get(slug = quizSlug)
            questions = QuestionModel.objects.filter(quiz = quiz)
            randomQuestion = random.choice(questions)
            serializer = QuestionSerializer(randomQuestion)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            data['response'] = 'There is not any categories in database'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserQuizes(request):
    if request.method == 'GET':
        data = {}
        try:
            quizes = QuizModel.objects.filter(user = request.user)
            if quizes.exists():
                serializer = QuizSerializerOnly(quizes, many = True)
                return Response(serializer.data)
            else:
                data['response'] = 'There is not any quizes in this category'
                return Response(data)
        except:
            data['response'] = 'This slug is invalid'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def NormalQuiz(request, quizSlug):
    if request.method == 'GET':
        data = {}
        try:
            quiz = QuizModel.objects.get(slug = quizSlug)
            questions = QuestionModel.objects.filter(quiz = quiz)
            serializer = QuestionSerializer(questions, many = True)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            data['response'] = 'There is not any categories in database'
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)

