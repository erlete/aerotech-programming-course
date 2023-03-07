import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    Car = getattr(module, "Car", None)
    assert Car is not None, "You have not defined the class `Car`."
    assert isinstance(Car, (type, object)), f"The class `Car` has got type {type(Car).__name__}, expected `(type, object)`."

    try:
        instance = Car("cyan", "AG2509V", 1241352134213)
    except TypeError:
        raise AssertionError("You have not defined the arguments of the constructor correctly.")

    assert getattr(instance, "color"), "The class Car has got no attribute `color`."
    assert getattr(instance, "color") == "cyan", "The `color` attribute value has not been set correctly."

    assert getattr(instance, "_license_plate"), "The class Car has got no attribute `license_plate`."
    assert getattr(instance, "_license_plate") == "AG2509V", "The `license_plate` attribute value has not been set correctly."

    assert getattr(instance, "_Car__vin_number"), "The class Car has got no attribute `__vin_number`."
    assert getattr(instance, "_Car__vin_number") == 1241352134213, "The `__vin_number` attribute value has not been set correctly."

    ext_color = getattr(module, "ext_color", None)
    assert ext_color is not None, "You have not defined the variable `ext_color`."
    assert isinstance(ext_color, str), f"The variable `ext_color` has got type {type(ext_color).__name__}, expected `str`."
    assert ext_color == "red", "The variable `ext_color` has the wrong value."

    ext_license_plate = getattr(module, "ext_license_plate", None)
    assert ext_license_plate is not None, "You have not defined the variable `ext_license_plate`."
    assert isinstance(ext_license_plate, str), f"The variable `ext_license_plate` has got type {type(ext_license_plate).__name__}, expected `str`."
    assert ext_license_plate == "1234ABCD", "The variable `ext_license_plate` has the wrong value."

    ext_vin_number = getattr(module, "ext_vin_number", None)
    assert ext_vin_number is not None, "You have not defined the variable `ext_vin_number`."
    assert isinstance(ext_vin_number, int), f"The variable `ext_vin_number` has got type {type(ext_vin_number).__name__}, expected `int`."
    assert ext_vin_number == 12340987, "The variable `ext_vin_number` has the wrong value."
