import importlib
from os.path import basename

import pytest

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    Coordinate = getattr(module, "Coordinate", None)
    assert Coordinate is not None, "You have not defined the class `Coordinate`."
    assert isinstance(Coordinate, (type, object)), f"The class `Coordinate` has got type {type(Coordinate).__name__}, expected `(type, object)`."

    try:
        instance = Coordinate(123, 456)
    except TypeError:
        raise AssertionError("You have not defined the arguments of the constructor correctly.")

    assert getattr(instance, "x"), "The class Coordinate has got no attribute `x`."

    assert getattr(instance, "y"), "The class Coordinate has got no attribute `y`."

    try:
        with pytest.raises(TypeError):
            instance.x = "123"
            instance.x = [1, 2, 3]
            instance.x = instance
    except BaseException:
        raise AssertionError("The `x` setter does not check valid data types correctly.")

    try:
        instance.x = 123.0
        instance.x = 123
    except TypeError:
        raise AssertionError("The `x` attribute should support integer and float values.")

    assert isinstance(instance.x, float), "The `x` getter does not return a float value."

    try:
        with pytest.raises(TypeError):
            instance.y = "123"
            instance.y = [1, 2, 3]
            instance.y = instance
    except BaseException:
        raise AssertionError("The `y` setter does not check valid data types correctly.")

    try:
        instance.y = 456.0
        instance.y = 456
    except TypeError:
        raise AssertionError("The `y` attribute should support integer and float values.")

    assert isinstance(instance.y, float), "The `y` getter does not return a float value."

    assert "distance_to_origin" in dir(instance), "You have not defined the method `distance_to_origin`."

    try:
        with pytest.raises(TypeError):
            instance.distance_to_origin(0)
    except BaseException:
        raise AssertionError("The `distance_to_origin` method should not accept any arguments.")

    assert instance.distance_to_origin() is not None, "The method `distance_to_origin` is not returning any values."
    assert instance.distance_to_origin() == pytest.approx(472.297575), "The method `distance_to_origin` does not return the correct value."

    try:
        result = Coordinate(3, -2) + Coordinate(5, 7)
    except Exception:
        raise AssertionError("The `+` operation is not supported between coordinates.")

    assert result is not None, "The result of the `+` operation is not returning any values."
    assert isinstance(result, Coordinate), f"The sum of two coordinates should return another coordinate, not {type(result).__name__}."
    assert result.x == 8 and result.y == 5, "The result of the `+` operation does not return the correct value."

    try:
        result = Coordinate(3, -2) - Coordinate(5, 7)
    except Exception:
        raise AssertionError("The `-` operation is not supported between coordinates.")

    assert result is not None, "The result of the `-` operation is not returning any values."
    assert isinstance(result, Coordinate), f"The subtraction of two coordinates should return another coordinate, not {type(result).__name__}."
    assert result.x == -2 and result.y == -9, "The result of the `-` operation does not return the correct value."
