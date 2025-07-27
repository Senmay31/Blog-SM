from django.shortcuts import render

# Create your views here.
from .models import Post
def home(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/home.html', {'posts': posts})