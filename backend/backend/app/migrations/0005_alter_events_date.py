# Generated by Django 4.2.6 on 2023-11-15 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_events_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='date',
            field=models.CharField(max_length=24),
        ),
    ]