import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    value = getattr(module, "value", None)
    assert value == 123, "The variable `value` has been modified."

    casted = getattr(module, "casted", None)
    assert casted is not None, "You have not defined the variable `casted`."
    assert isinstance(casted, str), f"The variable `casted` has got type {type(casted).__name__}, expected `str`."
    assert casted == "123", "The variable `casted` has the wrong value."
