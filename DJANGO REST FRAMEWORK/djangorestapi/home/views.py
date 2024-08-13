from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from home.models import Person
from home.serializer import PersonSerializer

@api_view(['GET', 'POST', 'PUT'])
def index(request):
    if request.method == "GET":
        people_detail = {
            'name': 'John Doe',
            'age': 30,
            'city': 'New York'
        }
        return Response(people_detail, status=status.HTTP_200_OK)
    elif request.method == "POST":
        return Response('This is a POST method', status=status.HTTP_200_OK)
    elif request.method == "PUT":
        return Response('This is a PUT method', status=status.HTTP_200_OK)

@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def person(request):
    if request.method == "GET":
        objPerson = Person.objects.filter(team__isnull=False)
        serializer = PersonSerializer(objPerson, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == "POST":
        data = request.data
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "PUT":
        try:
            obj = Person.objects.get(id=request.data['id'])
        except Person.DoesNotExist:
            return Response({'error': 'Person not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = PersonSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "PATCH":
        try:
            obj = Person.objects.get(id=request.data['id'])
        except Person.DoesNotExist:
            return Response({'error': 'Person not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = PersonSerializer(obj, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        try:
            obj = Person.objects.get(id=request.data['id'])
        except Person.DoesNotExist:
            return Response({'error': 'Person not found'}, status=status.HTTP_404_NOT_FOUND)
        
        obj.delete()
        return Response({'message': 'Person deleted'}, status=status.HTTP_204_NO_CONTENT)
