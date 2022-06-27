from django.urls import path
from . import views

urlpatterns = [
    path('notes', views.get_notes, name='notes'),
    path('note/<int:id>', views.get_note, name='note')
]