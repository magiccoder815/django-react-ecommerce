import os
from PIL import Image
from django.core.exceptions import ValidationError


def valid_image_extension(value):
    ext = os.path.splitext(value.name)[1]
    exten_valid = ['.png', '.jpeg', '.gif', '.jpg']
    if not ext.lower() in exten_valid:
        raise ValidationError(
            f"Unsupported file"
        )
    
def valid_size(image):
    if image:
        with Image.open(image) as img:
            if img.width>700 or img.height>70:
                 raise ValidationError(
                        f"The maximum allowed size 701x70"
                )