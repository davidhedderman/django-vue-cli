from django.db import models


class Post(models.Model):
    title = models.CharField(
        max_length=80, null=True, blank=True,
    )   
    created_dt = models.DateTimeField(
        verbose_name="Post created on",
        auto_now_add=True,
    )

