import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

bool_list = getattr(module, "bool_list", None)
bool_string = getattr(module, "bool_string", None)
bool_int = getattr(module, "bool_int", None)
bool_float = getattr(module, "bool_float", None)


def test():
    assert bool_list is not None, "You have not defined the variable `bool_list`"
    assert bool_string is not None, "You have not defined the variable `bool_string`"
    assert bool_int is not None, "You have not defined the variable `bool_int`"
    assert bool_float is not None, "You have not defined the variable `bool_float`"

    assert bool_list == False, "The value of `bool_list` is not correct"
    assert bool_string == False, "The value of `bool_string` is not correct"
    assert bool_int == False, "The value of `bool_int` is not correct"
    assert bool_float == False, "The value of `bool_float` is not correct"
