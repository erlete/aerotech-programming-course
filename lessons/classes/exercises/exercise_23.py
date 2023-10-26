class Car:

    """Created class Car."""

    def __init__(self, color, license_plate, vin_number):
        """Built constructor."""
        self.color = color
        self._license_plate = license_plate
        self.__vin_number = vin_number


mycar = Car("red", "1234ABCD", 12340987)


ext_color = mycar.color
ext_license_plate = mycar.__getattribute__('_license_plate')
ext_vin_number = mycar.__getattribute__('_Car__vin_number')

print(ext_color)
print(ext_license_plate)
print(ext_vin_number)
