import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

var_1 = getattr(module, "var_1", None)
var_2 = getattr(module, "var_2", None)


def test():
    assert var_1 is not None, "You have not defined variable `var_1`"
    assert var_2 is not None, "You have not defined variable `var_2`"
    assert isinstance(var_1, float), f"The value of pi should be a float, not {type(var_1).__name__}"
    assert isinstance(var_2, int), f"The value of seconds in a day should be an int, not {type(var_2).__name__}"
    assert var_1 == 3.1415, "The value of pi is not correct"
    assert var_2 == 86400, "The number of seconds in a day is not correct"
