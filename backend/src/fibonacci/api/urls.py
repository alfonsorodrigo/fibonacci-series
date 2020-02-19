from django.urls import path
from .views import FibonacciSeries


urlpatterns = [
    path('fibonacci/', FibonacciSeries.as_view())
]
