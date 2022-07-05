from telnetlib import STATUS
from .serializers import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from rest_framework.reverse import reverse
from rest_framework import generics
# Create your views here.
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'notes': reverse('notes', request=request, format=format),
        'note (Ex:1)' : reverse('note', request=request, args=[1], format=format)
    })
class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
class NoteDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
