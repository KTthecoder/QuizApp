from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import *
from django.core.exceptions import ObjectDoesNotExist
from .serializers import *


# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ChangePassword(request):
    if request.method == "POST":
        serializer = ChangePasswordSerializer(data = request.data)
        data = {}

        if serializer.is_valid():
            old_password = serializer.data.get("old_password")
            user = request.user
            if not user.check_password(old_password):
                data['response'] = "Invalid old password"
                return Response(data)
            
            user.set_password(serializer.data.get("new_password"))
            user.save()
            data["response"] = "Password Changed"
            return Response(data)
    else:
        data['response'] = 'Invalid method (Try GET)'
        return Response(data)       