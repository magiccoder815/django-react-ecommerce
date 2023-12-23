from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes

from .serializer import CategorySerializer

category_doc = extend_schema(
    description="Get a list of categories with optional filtering by slug.",

    responses=CategorySerializer(many=True),
    parameters=[
            OpenApiParameter(
                name='slug', 
                description='Category for slug ', 
                type=OpenApiTypes.STR,
                location = OpenApiParameter.QUERY,
                ),
           
        ],
)