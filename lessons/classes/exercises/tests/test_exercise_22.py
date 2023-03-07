import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    Coordinate = getattr(module, "Coordinate", None)
    assert Coordinate is not None, "You have not defined the class `Coordinate`."
    assert isinstance(Coordinate, (type, object)), f"The class `Coordinate` has got type {type(Coordinate).__name__}, expected `(type, object)`."

    try:
        instance = Coordinate(123, 456)
    except TypeError:
        raise AssertionError("You have not defined the arguments of the constructor correctly.")

    assert getattr(instance, "x"), "The class Coordinate has got no attribute `x`."
    assert instance.x == 123, "The `x` attribute value has not been set correctly."

    assert getattr(instance, "y"), "The class Coordinate has got no attribute `y`."
    assert instance.y == 456, "The `y` attribute value has not been set correctly."
