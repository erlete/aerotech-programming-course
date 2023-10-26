class Car:

    """Created class Car."""

    def __init__(self, color, license_plate, vin_number):
        """Built constructor."""
        self.color = color
        self._license_plate = license_plate
        self.__vin_number = vin_number

    @property
    def color(self):
        """Get Car color.

        Return:
            str: color.
        """
        return self.color

    @property
    def license_plate(self):
        """Get Car license_plate.

        Return:
            str: license_plate.
        """
        return self._license_plate

    @property
    def vin_number(self):
        """Get Car vin_number.

        Return:
            int: vin_number.
        """
        return self.__vin_number

    @color.setter
    def color(self, value):
        if not isinstance(value, str):
            return TypeError("the value must be a 'str' type")

        self.color = value


mycar = Car("red", "1234ABCD", 12340987)
ext_color = mycar.color()
ext_license_plate = mycar.license_plate()
ext_vin_number = mycar.vin_number()
