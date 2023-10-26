class Car:
    
    def __init__(self, color, license_plate, vin_number):
        self.color = color
        self._license_plate = license_plate
        self.__vin_number = vin_number
    

car = Car("red", "1234ABCD", 12340987)

ext_color = car.color
ext_license_plate = car._license_plate
ext_vin_number = car._Car__vin_number
    
        