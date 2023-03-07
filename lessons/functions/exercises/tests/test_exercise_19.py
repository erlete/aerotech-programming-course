import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    get_100 = getattr(module, "get_100", None)
    assert get_100 is not None, "You have not defined the function `get_100`."
    assert callable(get_100), "The variable `get_100` is not a function."
    assert get_100() == 100, "The variable `get_100` has the wrong return value."
