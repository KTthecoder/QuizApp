"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls.static import static
from django.conf import settings
from MainApi.views import *
from . import views
from AccountApp.views import *
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/change-password/', ChangePassword, name='ChangePassword'),

    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('quiz/all', AllQuizes, name='AllQuizes'),
    path('quiz/<slug:categorySlug>', QuizesByCategory, name='QuizesByCategory'),
    path('quiz/details/<slug:quizSlug>', QuizDetails, name='QuizDetails'),

    path('categories/all', AllCategories, name='AllCategories'),
    path('categories/<slug:categorySlug>', CategoryQuizes, name='CategoryQuizes'),
    path('category/<slug:categorySlug>', CategoryBySlug, name='CategoryBySlug'),

    path('quiz/favorite/<str:username>', FavoriteQuizes, name='FavoriteQuizes'),
    path('quiz/add-to-favorite/', AddToFavorite, name='AddToFavorite'),

    path('quiz/<slug:quizSlug>/random-game', RandomQuestionInQuiz, name='RandomQuestionInQuiz'),
    path('quiz/<slug:quizSlug>/normal-game', NormalQuiz, name='NormalQuiz'),

    path('user/quizes/', UserQuizes, name='UserQuizes'),

    path('search/<str:quizName>/', SearchQuiz, name='SearchQuiz'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
