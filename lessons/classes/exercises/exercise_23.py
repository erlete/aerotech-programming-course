class Car:
    def __init__(self, color, license_plate, vin_number):
        self.color = color
        self._license_plate = license_plate
        self._Car__vin_number = vin_number


my_car = Car("red", "1234ABCD", 12340987)
ext_color = my_car.color
ext_license_plate = my_car._license_plate
ext_vin_number = my_car._Car__vin_number
