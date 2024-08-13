# customer/serializers.py
from rest_framework import serializers
from .models import Enquiry
from .models import GalleryImage

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'