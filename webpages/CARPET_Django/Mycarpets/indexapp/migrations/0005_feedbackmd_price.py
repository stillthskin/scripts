# Generated by Django 3.2.8 on 2021-11-28 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indexapp', '0004_alter_mypostmd_imagepost'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedbackmd',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]