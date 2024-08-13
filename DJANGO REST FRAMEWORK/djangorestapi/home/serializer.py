from rest_framework import serializers
from .models import Person, Team

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['team_name']
        
class PersonSerializer(serializers.ModelSerializer):
    team = TeamSerializer()

    class Meta:
        model = Person
        fields = '__all__'
        depth = 1
            
    def validate(self, data):
        spl_chars = "!@#$%^&*()_+=-`~"
        
        if any(c in spl_chars for c in data['name']):
            raise serializers.ValidationError("Name cannot contain special characters")
        
        if data['age'] < 18:
            raise serializers.ValidationError("Age should not be less than 18")
            
        return data
