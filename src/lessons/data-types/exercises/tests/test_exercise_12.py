import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    tuple_1 = getattr(module, "tuple_1", None)
    assert tuple_1 == (1, 1, 2, 3, 4, 5, 5, 5, 6), "The variable `tuple_1` has been modified."

    count = getattr(module, "count", None)
    assert count is not None, "You have not defined the variable `count`."
    assert isinstance(count, int), f"The variable `count` has got type {type(count).__name__}, expected `int`."
    assert count == 3, "The variable `count` has the wrong value."
