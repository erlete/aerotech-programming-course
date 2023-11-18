import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def test():
    riemann_integral = getattr(module, "riemann_integral", None)
    assert riemann_integral is not None, "You have not defined the variable `riemann_integral`."
    assert isinstance(riemann_integral, float), f"The variable `riemann_integral` has got type {type(riemann_integral).__name__}, expected `float`."
    assert 1 - riemann_integral <= 1e-4, "The variable `riemann_integral` has the wrong value."

    scipy_integral = getattr(module, "scipy_integral", None)
    assert scipy_integral is not None, "You have not defined the variable `scipy_integral`."
    assert isinstance(scipy_integral, float), f"The variable `scipy_integral` has got type {type(scipy_integral).__name__}, expected `float`."
    assert 1 - scipy_integral <= 1e-4, "The variable `scipy_integral` has the wrong value."
