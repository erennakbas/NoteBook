from telnetlib import STATUS
from .serializers import NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note
# Create your views here.
@api_view(['GET'])
def get_notes (request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
@api_view(['GET'])
def get_note (request,id):
    note = Note.objects.get(pk=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)