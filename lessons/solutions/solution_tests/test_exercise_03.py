import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    var_1 = getattr(module, "var_1", None)
    assert var_1 is not None, "You have not defined the variable `var_1`."
    assert isinstance(var_1, float), f"The variable `var_1` has got type {type(var_1).__name__}, expected `float`."
    assert var_1 == 3.1415, "The variable `var_1` has the wrong value."

    var_2 = getattr(module, "var_2", None)
    assert var_2 is not None, "You have not defined the variable `var_2`."
    assert isinstance(var_2, int), f"The variable `var_2` has got type {type(var_2).__name__}, expected `int`."
    assert var_2 == 86400, "The variable `var_2` has the wrong value."
