# Generated by Django 3.2.8 on 2022-08-10 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApi', '0005_auto_20220810_1156'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizcategorymodel',
            name='color',
            field=models.CharField(default='red', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='quizmodel',
            name='difficultyLvl',
            field=models.CharField(choices=[('Easy', 'Easy'), ('Hard', 'Hard'), ('Medium', 'Medium')], default='Easy', max_length=6),
        ),
    ]
