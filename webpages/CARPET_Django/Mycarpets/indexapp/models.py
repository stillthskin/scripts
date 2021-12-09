from django.db import models

# Create your models here.
class feedbackMD(models.Model):
    tittle = models.CharField(max_length=100)
    comment = models.CharField(max_length=500)
    price = models.IntegerField(default=0)
    imagepost = models.ImageField(upload_to='images/')
#class login(models.Model):
#   name = models.CharField(max_length=100)
#    feed = models.CharField(max_length=500)
class registerMD(models.Model):
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=500)
class mypostMD(models.Model):
    tittle = models.CharField(max_length=100)
    imagepost = models.ImageField(upload_to='images/')
    feedpost = models.CharField(max_length=500)

