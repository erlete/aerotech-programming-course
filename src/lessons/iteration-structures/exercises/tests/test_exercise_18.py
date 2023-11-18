import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    data = getattr(module, "data", None)
    assert data is not None, "You have not defined the variable `data`."
    assert isinstance(data, list), f"The variable `data` has got type {type(data).__name__}, expected `list`."
    assert data == [0, -3, -9, -12, -15, -21], "The variable `data` has the wrong value."
