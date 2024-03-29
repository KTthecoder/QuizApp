from django.db import models
from django.contrib.auth.models import User
from django_resized import ResizedImageField

lvl = {
    ('Hard', 'Hard'),
    ('Medium', 'Medium'),
    ('Easy', 'Easy')
}

# Create your models here.
class QuizCategoryModel(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    icon = ResizedImageField(force_format="WEBP", quality=80, upload_to="CategoryIcon/")
    iconAlt = models.CharField(max_length=150, null=True, blank=True)
    color = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class QuizModel(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=400)
    difficultyLvl = models.CharField(choices=lvl, max_length=6, default='Easy')
    views = models.FloatField(default=0)
    QuizImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="QuizImage/")
    QuizImgAlt = models.CharField(max_length=150, null=True, blank=True)
    slug = models.SlugField(unique=True)

    cateogry = models.ForeignKey(QuizCategoryModel, on_delete=models.CASCADE)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @property
    def questionCount(self):
        total = QuestionModel.objects.filter(quiz = self.id).count()
        return total

    def __str__(self):
        return self.name

class QuestionModel(models.Model):
    title = models.CharField(max_length=250)
    ansA = models.CharField(max_length=250)
    ansB = models.CharField(max_length=250)
    ansC = models.CharField(max_length=250)
    ansD = models.CharField(max_length=250)
    correctAns = models.CharField(max_length=250)
    questionImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="QuestionImages/")
    questionImgAlt = models.CharField(max_length=150, null=True, blank=True)

    quiz = models.ForeignKey(QuizModel, related_name="questionmodel", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class FavoriteQuizModel(models.Model):
    quiz = models.ForeignKey(QuizModel, related_name="quizmodel", on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name="usermodel", on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + " - " + self.quiz.name