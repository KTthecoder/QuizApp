from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *

# Create your views here.
@api_view(['GET'])
def AllQuizes(request):
    if request.method == 'GET':
        quizes = QuizModel.objects.all()
        data = {}
        if quizes.exists():
            serializer = QuizSerializer(quizes, many = True)
            return Response(serializer.data)
        else:
            data['response'] = 'There is not any quizes in database'
            return Response(data)
    else:
        data = {}
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)