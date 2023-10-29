"""Module."""


class Car:
    """Class Car.

    This class represents a car with attributes: color,
    license plate and vin number.

    Attributes:
        color (str): color of the car.
        license_plate (str): license plate code.
        vin_number (int): vin number.
    """

    def __init__(self, color: str, license_plate: str,
                 vin_number: int) -> None:
        """Initialize a Car instance.

        Args:
            color (str): color of the car.
            license_plate (str): license plate code.
            vin_number (int): vin number.
        """
        self.color: str = color
        self._license_plate: str = license_plate
        self.__vin_number: int = vin_number


car: Car = Car("red", "1234ABCD", 12340987)

ext_color: str = car.color
ext_license_plate: str = car._license_plate
ext_vin_number: int = car._Car__vin_number
