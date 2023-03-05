import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    list_1 = getattr(module, "list_1", None)
    assert list_1 is not None, "You have not defined the variable `list_1`."
    assert isinstance(list_1, list), f"The variable `list_1` has got type {type(list_1).__name__}, expected `list`."
    assert list_1 == [-1, 0, 2, 4, 7], "The variable `list_1` has the wrong value."
