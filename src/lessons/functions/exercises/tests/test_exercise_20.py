import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    can_buy = getattr(module, "can_buy", None)
    assert can_buy is not None, "You have not defined the function `can_buy`."
    assert callable(can_buy), "The variable `can_buy` is not a function."
    assert can_buy(10, 5) == False, "The `can_buy(10, 5)` has the wrong return value."
    assert can_buy(10, 10) == True, "The `can_buy(10, 10)` has the wrong return value."
    assert can_buy(5, 10) == True, "The `can_buy(5, 10)` has the wrong return value."
    assert can_buy(10, 0) == False, "The `can_buy(10, 0)` has the wrong return value."
    assert can_buy(10) == False, "The `can_buy(10)` has the wrong return value."
    assert can_buy(0) == True, "The `can_buy(0)` has the wrong return value."
