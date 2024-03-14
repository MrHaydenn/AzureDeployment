from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Events, Reviews, Images
from django.http import HttpRequest
import random 
@api_view(['POST'])
def custom_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get("email")

    user = authenticate(request, username=username, password=password, email=email)

    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get("email")

    User.objects.create_user(username=username, password=password, email=email)

    return Response({'message': 'User registered successfully'})

@api_view(['GET'])
def get_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    User.objects.create_user(username=username, password=password)

    return Response({'message': 'User data getten successfully'})

@api_view(['POST'])
def make_event(request):
    title = request.data.get('title')
    date = request.data.get('date')
    description = request.data.get('description')
    location = request.data.get('location')

    Events.objects.create(title=title, date=date, description=description, location=location)

    return Response({'message': 'Event successfully'})

@api_view(['GET'])
def get_events(request: HttpRequest):
    try:
        events = Events.objects.all()
        serialized_events = [{'title': event.title, 'description': event.description, 'date': event.date, 'location': event.location, 'image': event.image} for event in events]
        return Response(serialized_events)
    except Exception as e:
        print(f"Error in get_events view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def submit_review(request):
    try:
        data = request.data
        q1 = data.get('q1')
        if q1 == "Review from Student":
            q1 = "Student Review"
        elif q1 == "Tour Review":
            q1 = "Tour Review"
        else:
            pass

        random_questions = [random.randint(0, 10) for _ in range(6)]

        review = Reviews(
            title=data.get('title'),
            date=data.get('date'),
            name=data.get('name'),
            q1=q1,
            q2=data.get('q2'),
            q3=data.get('q3'),
            q4=data.get('q4'),
            q5=data.get('q5'),
            q6=data.get('q6'),
            q7=data.get('q7'),
            comments=data.get('comments')
        )
        review.save()
        return Response({'message': 'Review submitted successfully'})
    except Exception as e:
        print(f"Error in submit_review view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_reviews(request):
    try:
        reviews = Reviews.objects.all()
        serialized_reviews = [
            {
                'title': review.title,
                'date': review.date,
                'name' : review.name,
                'q1': review.q1,
                'q2': review.q2,
                'q3': review.q3,
                'q4': review.q4,
                'q5': review.q5,
                'q6': review.q6,
                'q7': review.q7,
                'comments': review.comments
            }
            for review in reviews
        ]
        return Response(serialized_reviews)
    except Exception as e:
        print(f"Error in get_reviews view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def upload_images(request):
    selectBuilding = request.data.get('selectBuilding')
    description = request.data.get('description')
    image = request.data.get('image')

    Images.objects.create(selectBuilding=selectBuilding, description=description, image=image)

    return Response({'message': 'Image uploaded successfully'})


@api_view(['GET'])
def get_images(request: HttpRequest):
    try:
        images = Images.objects.all()
        serialized_images = [{'selectBuilding': image.selectBuilding, 'description': image.description, 'image': image.image} for image in images]
        return Response(serialized_images)
    except Exception as e:
        print(f"Error in get_images view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)