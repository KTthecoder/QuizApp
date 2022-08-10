from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(QuizModel)
admin.site.register(QuestionModel)
admin.site.register(FavoriteQuizModel)
