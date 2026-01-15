from django.shortcuts import render


def uberuns(request):
    return render(request, 'de/uberuns.html')
    
def home(request):
    return render(request, 'de/ms_de.html')

