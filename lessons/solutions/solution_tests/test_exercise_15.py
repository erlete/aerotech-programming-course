import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    value_1 = getattr(module, "value_1", None)
    assert value_1 == -1, "The variable `value_1` has been modified."

    value_2 = getattr(module, "value_2", None)
    assert value_2 == 5, "The variable `value_2` has been modified."

    comp = getattr(module, "comp", None)
    assert comp is not None, "You have not defined the variable `comp`."
    assert isinstance(comp, bool), f"The variable `comp` has got type {type(comp).__name__}, expected `bool`."
    assert comp == False, "The variable `comp` has the wrong value."
