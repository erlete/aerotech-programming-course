import importlib
from os.path import basename

import matplotlib as matplotlib_i
import numpy as numpy_i

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    numpy = getattr(module, "numpy", None)
    assert numpy is not None, "You have not imported the `numpy` library."
    assert numpy == numpy_i, "The `numpy` library has not been properly imported."

    matplotlib = getattr(module, "matplotlib", None)
    assert matplotlib is not None, "You have not imported the `matplotlib` library."
    assert matplotlib == matplotlib_i, "The `matplotlib` library has not been properly imported."
