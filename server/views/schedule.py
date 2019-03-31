from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.contrib.auth.models import User
from django.http import JsonResponse
import datetime

from server.models import Schedule as Work

import json


class Ajax(View):
    def post(self, request):
        #         upcoming = Event.objects.filter(date__gte=now).order_by('date')
        #         passed = Event.objects.filter(date__lt=now).order_by('-date')
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        e = body["firstDay"]
        j = body["lastDay"]
        year = int(e[0:4])
        month = int(e[5:7])
        day = int(e[8:10])
        firstDate = datetime.date(year, month, day)
        lastDate = datetime.date(int(j[0:4]), int(j[5:7]), int(j[8:10]))
        #work = Work.objects.exclude(end__lt=firstDate).filter(user_id=request.user.id, start__lte=lastDate).values('start', 'end', 'type')
        work = Work.objects.filter(user_id=request.user.id).values(
            'start', 'end', 'type')
        schedule = list(work)
        return JsonResponse(schedule, safe=False)


class Schedule(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'

    def get(self, request):
        work = Work.objects.filter(user_id=request.user.id).values('start', 'end', 'type')
        schedule = list(work)
        return render(request, 'schedule/build/index.html', {'schedule': schedule})

    def post(self, request):
        schedule = Work(
            start='{}-{}-{}'.format(request.POST['yearStart'], request.POST['monthStart'], request.POST['dayStart']),
            end='{}-{}-{}'.format(request.POST['yearEnd'], request.POST['monthEnd'], request.POST['dayEnd']),
            type=request.POST['jobOption'],
            user=User.objects.get(id=request.user.id, is_active=True)
        )
        schedule.save()
        return render(request, 'schedule/build/index.html')
