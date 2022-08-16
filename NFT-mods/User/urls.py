from django.urls import path
from . import views

#url conf
urlpatterns =[
    path('NewPersona/', views.NewPersona),
    path('NewSquad/', views.NewSquad),
]
