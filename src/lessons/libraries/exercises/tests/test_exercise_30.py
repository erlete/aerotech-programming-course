import importlib
from os.path import basename

import numpy as np

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    x = getattr(module, "x", None)
    assert x is not None, "You have not defined the variable `x`."
    assert isinstance(x, np.ndarray), f"The variable `x` has got type {type(x).__name__}, expected `np.ndarray`."
    assert list(x) == list(np.arange(0, 2 * np.pi, .1)), "The variable `x` has the wrong value."

    y = getattr(module, "y", None)
    assert y is not None, "You have not defined the variable `y`."
    assert isinstance(y, np.ndarray), f"The variable `y` has got type {type(y).__name__}, expected `np.ndarray`."
    assert list(y) == list(np.sin(x)), "The variable `y` has the wrong value."
