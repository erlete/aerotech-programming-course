import importlib
from os.path import basename

import matplotlib as matplotlib_i

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    matplotlib = getattr(module, "matplotlib", None)
    assert matplotlib is not None, "You have not imported the `matplotlib.pyplot` module."
    assert matplotlib == matplotlib_i, "The `matplotlib.pyplot` module has not been properly imported."
