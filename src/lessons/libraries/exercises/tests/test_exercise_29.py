import importlib
from os.path import basename

import matplotlib.pyplot as plt_i

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    plt = getattr(module, "plt", None)
    assert plt is not None, "You have not imported the `matplotlib.pyplot` module as `plt`."
    assert plt == plt_i, "The `matplotlib.pyplot` module has not been properly imported."
