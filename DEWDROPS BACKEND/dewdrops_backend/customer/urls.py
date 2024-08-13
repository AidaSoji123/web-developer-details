# # customer/urls.py
# from django.urls import path
# from . import views

# urlpatterns = [
#     path('enquiry/', views.enquiry, name='enquiry'),
# ]



from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EnquiryViewSet, GalleryImageViewSet

router = DefaultRouter()
router.register(r'enquiries', EnquiryViewSet)
router.register(r'gallery', GalleryImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
