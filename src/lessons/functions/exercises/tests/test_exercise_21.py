import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    sum_up = getattr(module, "sum_up", None)
    assert sum_up is not None, "You have not defined the function `sum_up`."
    assert callable(sum_up), "The variable `sum_up` is not a function."
    assert sum_up() == 0, "The `sum_up()` has the wrong return value."
    assert sum_up(1) == 2, "The `sum_up(1)` has the wrong return value."
    assert sum_up(1, 2) == 6, "The `sum_up(1, 2)` has the wrong return value."
    assert sum_up(2, -2) == 0, "The `sum_up(2, -2)` has the wrong return value."
    assert sum_up(False, True) == 2, "The `sum_up(True, False)` has the wrong return value."
    assert sum_up(1, True) == 4, "The `sum_up(1, True)` has the wrong return value."
