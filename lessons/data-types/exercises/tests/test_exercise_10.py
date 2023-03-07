import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    list_1 = getattr(module, "list_1", None)
    assert list_1 == ["a", "b", "c"], "The variable `list_1` has been modified."

    list_2 = getattr(module, "list_2", None)
    assert list_2 is not None, "You have not defined the variable `list_2`."
    assert isinstance(list_2, list), f"The variable `list_2` has got type {type(list_2).__name__}, expected `list`."
    assert list_2 == ["a", "b", "c"], "The variable `list_2` has the wrong value."
    assert list_1 is not list_2, "The variable `list_2` is linked to the variable `list_1`. They should be independent."
