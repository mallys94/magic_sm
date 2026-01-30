
from django.contrib import admin
from django.urls import path
from .views import home, uberuns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('uberuns', uberuns, name='uberuns')
]
