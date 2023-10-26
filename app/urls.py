from django.urls import path
from .views import *

urlpatterns = [
    path('', inicio.as_view(), name='index'),
]