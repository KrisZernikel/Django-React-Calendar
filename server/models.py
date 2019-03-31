from django.db import models
from django.contrib.auth.models import User


class Schedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()
    type = models.CharField(max_length=100)

    def __str__(self):
        return '{} {} - {}'.format(self.user, self.start, self.end)
