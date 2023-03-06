import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")


def test():
    my_list = getattr(module, "my_list", None)
    assert my_list is not None, "You have not defined the variable `my_list`"
    assert isinstance(my_list, list), f"The variable `my_list` has got type {type(my_list).__name__}, expected `list`"
    assert my_list == [1, 2, 3, 4, 5], "The variable `my_list` has the wrong value."

    my_set = getattr(module, "my_set", None)

    assert my_set is not None, "You have not defined the variable `my_set`"
    assert isinstance(my_set, set), f"The variable `my_set` has got type {type(my_set).__name__}, expected `set`"
    assert my_set == {-2, -1, 0}, "The variable `my_set` has the wrong value."

    my_string = getattr(module, "my_string", None)

    assert my_string is not None, "You have not defined the variable `my_string`"
    assert isinstance(my_string, str), f"The variable `my_string` has got type {type(my_string).__name__}, expected `str`"
    assert my_string == "abc", "The variable `my_string` has the wrong value."

    my_list_2 = getattr(module, "my_list_2", None)

    assert my_list_2 is not None, "You have not defined the variable `my_list_2`"
    assert isinstance(my_list_2, list), f"The variable `my_list_2` has got type {type(my_list_2).__name__}, expected `list`"
    assert my_list_2 == ["I'm", "learning", "Python"], "The variable `my_list_2` has the wrong value."

    my_dict = getattr(module, "my_dict", None)
    assert my_dict is not None, "You have not defined the variable `my_dict`"
    assert isinstance(my_dict, dict), f"The variable `my_dict` has got type {type(my_dict).__name__}, expected `dict`"
    assert my_dict == {"seconds": 86400, "minutes": 1440, "hours": 24}, "The variable `my_dict` has the wrong value."
