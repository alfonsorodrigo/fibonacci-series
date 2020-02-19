from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FibonacciSerializer


class FibonacciSeries(APIView):
    """
    View to list a fibonacci series by index.

    * Requires params:
        @fibonacci_index Integer
    """

    def get(self, request):
        """
        Return index a fibonacci series.
        """
        serializer = FibonacciSerializer(data=self.request.query_params)
        serializer.is_valid(raise_exception=True)
        if serializer.is_valid():
            fibonacci_index = serializer.data["fibonacci_index"]
            first_number = 0
            second_number = 1
            fibonacci_series = []
            for item in range(fibonacci_index):
                fibonacci_series.append(first_number)
                tmp = first_number
                first_number = second_number
                second_number = tmp + second_number
            return Response({"fibonacci_series": fibonacci_series, "fibonacci_index": fibonacci_series[-1]})
