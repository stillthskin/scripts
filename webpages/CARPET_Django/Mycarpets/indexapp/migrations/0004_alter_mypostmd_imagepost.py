# Generated by Django 3.2.8 on 2021-11-18 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indexapp', '0003_auto_20211118_1938'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mypostmd',
            name='imagepost',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
