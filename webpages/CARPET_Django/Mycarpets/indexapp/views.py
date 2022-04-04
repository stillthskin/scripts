from django.shortcuts import render
from django.http import HttpResponse
from .models import feedbackMD, registerMD, mypostMD
from django.contrib.auth import authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
from django.core.mail import send_mail



def index(request):
	userfeed=mypostMD.objects.all()
	return render(request, 'index.html',{"userfeed":userfeed})


def explore(request):
	exploreData = feedbackMD.objects.all()
	return render(request, 'explore.html', {'exploreData':exploreData})


def about(request):
	return render(request, 'about.html')


def contact(request):
	if request.method == 'POST':
		name = request.POST['name']
		email = request.POST['email']
		message = request.POST['feed']
		send_mail(
    	'Customer Feedback.',
    	message,
    	email,
        ['kenda.dennis3@gmail.com'],
        fail_silently=False,)

	return render(request, 'contact.html')


def cart(request):
	return render(request, 'cart.html')


def feedpost(request):
	if request.method == 'POST':
	   tittle = request.POST['tittle']
	   imagepost  = request.FILES['myimage']
	   comment = request.POST['post']
	   price = request.POST['price']
	   #ffs = FileSystemStorage()
	   #imagepost = ffs.save(imagepost1.name, imagepost1.url)
	   feedback_info = feedbackMD(tittle=tittle, comment=comment, price=price, imagepost=imagepost)
	   feedback_info.save()
	   messages.success(request, "success!")
	return render(request, 'post.html')


def login(request):
	if request.method == 'POST':
	   username = request.POST['username']
	   password = request.POST['password']
	   user = authenticate(username=username, password=password)
	   if user is not None:
	   	 return HttpResponse("Login success!")
	   	 # A backend authenticated the credentials
	   else:
	     # No backend authenticated the credentials
	     return HttpResponse("Login Failed!")
	return render(request, 'login.html')


def register(request):
	if request.method == 'POST':
	   username = request.POST['username']
	   email =    request.POST['email']
	   password = request.POST['password']
	   password2 = request.POST['password2']
	   if password != password2:
	   	  print("passwords do not match.")
	   	  #redirect
	   else:
	      user = register.objects.create_user(username, email, password)
	      user.save()
	      return HttpResponse("success!")
	return render(request, 'register.html')


def post1(request):
	if request.method == 'POST':
	   uname = request.POST['uname']
	   imagepost  = request.FILES['myfile']
	   comment = request.post['comment']
	   feedback_info = mypostMD(name=username, feed=comment, imagepost=imagepost)
	   feedback_info.save()
	return