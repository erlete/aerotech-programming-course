import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    my_first_variable = getattr(module, "my_first_variable", None)
    assert my_first_variable is not None, "You have not defined the variable `my_first_variable`."
    assert isinstance(my_first_variable, int), f"The variable `my_first_variable` has got type {type(my_first_variable).__name__}, expected `int`."
    assert my_first_variable == 69, "The variable `my_first_variable` has the wrong value."
