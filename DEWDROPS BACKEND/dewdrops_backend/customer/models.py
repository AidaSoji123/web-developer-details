# customer/models.py
from django.db import models

EVENT_TYPE_CHOICES = [
    ('wedding', 'Wedding'),
    ('private_event', 'Private Event'),
    ('corporate_event', 'Corporate Event'),
    ('birthday_party', 'Birthday Party'),
    ('other', 'Other'),
]

class Enquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date_of_function = models.DateField()
    time_of_function = models.TimeField()
    event_type = models.CharField(max_length=50, choices=EVENT_TYPE_CHOICES)
    venue = models.CharField(max_length=255, blank=True)
    estimated_guests = models.IntegerField(null=True, blank=True)
    message = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.event_type}"


class GalleryImage(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery/')

    def __str__(self):
        return self.title
