from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root),
    path('notes', views.NoteList.as_view(), name='notes'),
    path('notes/<int:pk>', views.NoteDetail.as_view(), name='note')
]