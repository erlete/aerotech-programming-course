import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    full_name = getattr(module, "full_name", None)
    assert full_name == "Don Juan Quintela", "The variable `full_name` has been modified."

    initial = getattr(module, "initial", None)
    assert initial is not None, "You have not defined the variable `initial`."
    assert isinstance(initial, str), f"The variable `initial` has got type {type(initial).__name__}, expected `str`."
    assert initial == "D", "The variable `initial` has the wrong value."

    middle_name = getattr(module, "middle_name", None)
    assert middle_name is not None, "You have not defined the variable `middle_name`."
    assert isinstance(middle_name, str), f"The variable `middle_name` has got type {type(middle_name).__name__}, expected `str`."
    assert middle_name == "Juan", "The variable `middle_name` has the wrong value."

    last_name = getattr(module, "last_name", None)
    assert last_name is not None, "You have not defined the variable `last_name`."
    assert isinstance(last_name, str), f"The variable `last_name` has got type {type(last_name).__name__}, expected `str`."
    assert last_name == "Quintela", "The variable `last_name` has the wrong value."
