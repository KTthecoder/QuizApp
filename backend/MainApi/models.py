from django.db import models
from django.contrib.auth.models import User

lvl = {
    ('Hard', 'Hard'),
    ('Medium', 'Medium'),
    ('Easy', 'Easy')
}

# Create your models here.
class QuizCategoryModel(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    icon = models.ImageField(upload_to="CategoryIcon/")

    def __str__(self):
        return self.name

class QuizModel(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=400)
    difficultyLvl = models.CharField(choices=lvl, max_length=6, default='Easy')
    views = models.IntegerField(default=0)
    QuizImg = models.ImageField(upload_to="QuizImage/")
    slug = models.SlugField(unique=True)

    cateogry = models.ForeignKey(QuizCategoryModel, on_delete=models.CASCADE)

    @property
    def questionCount(self):
        total = QuestionModel.objects.all().count()
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
    questionImg = models.ImageField(upload_to="QuestionImages/")

    quiz = models.ForeignKey(QuizModel, related_name="questionmodel", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class FavoriteQuizModel(models.Model):
    quiz = models.ForeignKey(QuizModel, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + " - " + self.quiz.name