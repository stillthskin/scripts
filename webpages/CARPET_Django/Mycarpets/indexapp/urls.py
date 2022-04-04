from django.urls import path
from . import views


urlpatterns = [
path('', views.index, name='index'),
path('home', views.index, name='index'),
path('feed', views.feedpost, name='feedback'),
path('about', views.about, name='about'),
path('contact', views.contact, name='contact'),
path('login', views.login, name='login'),
path('register', views.register, name='register'),
path('post1', views.post1, name='post1'),
path('explore', views.explore, name='explore'),
path('cart', views.cart, name='cart')
]