# # customer/views.py
# from django.shortcuts import render
# from .models import Enquiry

# def enquiry(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         email = request.POST.get('email')
#         phone = request.POST.get('phone')
#         date_of_function = request.POST.get('date_of_function')
#         time_of_function = request.POST.get('time_of_function')
#         event_type = request.POST.get('event_type')
#         venue = request.POST.get('venue')
#         estimated_guests = request.POST.get('estimated_guests')
#         message = request.POST.get('message')
#         Enquiry.objects.create(
#             name=name, email=email, phone=phone, date_of_function=date_of_function, 
#             time_of_function=time_of_function, event_type=event_type, venue=venue,
#             estimated_guests=estimated_guests, message=message
#         )
#     return render(request, 'customer/enquiry.html')




from rest_framework import viewsets,permissions
from .models import Enquiry
from .serializers import EnquirySerializer
from .models import GalleryImage
from .serializers import GalleryImageSerializer

class EnquiryViewSet(viewsets.ModelViewSet):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer

class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]