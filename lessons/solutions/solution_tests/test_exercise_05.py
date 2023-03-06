import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    bool_list = getattr(module, "bool_list", None)
    assert bool_list is not None, "You have not defined the variable `bool_list`."
    assert isinstance(bool_list, bool), f"The variable `bool_list` has got type {type(bool_list).__name__}, expected `bool`."
    assert bool_list == False, "The variable `bool_list` has the wrong value."

    bool_string = getattr(module, "bool_string", None)
    assert bool_string is not None, "You have not defined the variable `bool_string`."
    assert isinstance(bool_string, bool), f"The variable `bool_string` has got type {type(bool_string).__name__}, expected `bool`."
    assert bool_string == False, "The variable `bool_string` has the wrong value."

    bool_int = getattr(module, "bool_int", None)
    assert bool_int is not None, "You have not defined the variable `bool_int`."
    assert isinstance(bool_int, bool), f"The variable `bool_int` has got type {type(bool_int).__name__}, expected `bool`."
    assert bool_int == False, "The variable `bool_int` has the wrong value."

    bool_float = getattr(module, "bool_float", None)
    assert bool_float is not None, "You have not defined the variable `bool_float`."
    assert isinstance(bool_float, bool), f"The variable `bool_float` has got type {type(bool_float).__name__}, expected `bool`."
    assert bool_float == False, "The variable `bool_float` has the wrong value."
