from django.shortcuts import render
from django.http import HttpResponse


def forma(request):
    return render(request, 'main/forma.html')

