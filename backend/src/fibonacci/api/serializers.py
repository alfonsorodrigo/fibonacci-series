from rest_framework import serializers


def only_positive(value):
    if value < 1:
        raise serializers.ValidationError(
            'enter only positive number and greater than 0')


class FibonacciSerializer(serializers.Serializer):
    fibonacci_index = serializers.IntegerField(
        required=True, validators=[only_positive])
