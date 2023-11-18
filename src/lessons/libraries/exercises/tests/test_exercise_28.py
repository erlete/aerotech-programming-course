import importlib
from os.path import basename

from bidimensional import Coordinate as Coordinate_i

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    Coordinate = getattr(module, "Coordinate", None)
    assert Coordinate is not None, "You have not imported the `Coordinate` class."
    assert Coordinate == Coordinate_i, "The `Coordinate` class has not been properly imported."
