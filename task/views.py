from django.shortcuts import render,redirect,get_object_or_404
from .models import Task
# Create your views here.

def tasks(request):
    if request.method == 'POST':
        t = Task()
        t.title = request.POST['goal']
        t.save()
        return redirect("/")
    else:
        task = Task.objects.all
        return render(request,'task/task.html',{'task' : task })

def delete(request,task_id):
    t = get_object_or_404(Task,pk = task_id)
    t.delete()
    return redirect("/")