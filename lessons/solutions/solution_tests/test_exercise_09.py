import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    full_name = getattr(module, "full_name", None)
    assert full_name is not None, "You have not defined the variable `full_name`."
    assert isinstance(full_name, str), f"The variable `full_name` has got type {type(full_name).__name__}, expected `str`."
    assert full_name == "JIJIJI BAAMONDE", "The variable `full_name` has the wrong value."

    first_a = getattr(module, "first_a", None)
    assert first_a is not None, "You have not defined the variable `first_a`."
    assert isinstance(first_a, int), f"The variable `first_a` has got type {type(first_a).__name__}, expected `int`."
    assert first_a == 8, "The variable `first_a` has the wrong value."
