import importlib
from os.path import basename

import pytest

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    weird_number = getattr(module, "weird_number", None)
    assert weird_number is not None, "You have not defined the function `weird_number`."
    assert callable(weird_number), "The variable `weird_number` is not a function."

    try:
        with pytest.raises(TypeError):
            weird_number((1, 2, 3))
            weird_number({1, 2, 3})
            weird_number((1, 2, 3))
            weird_number(True)
            weird_number(weird_number)
    except BaseException:
        raise AssertionError("The `weird_number` function does not check valid data types correctly.")

    assert weird_number("a") == 1, "`weird_number(\"a\")` function does not return the right value."
    assert weird_number("adasfasd") == 1, "`weird_number(\"adasfasd\")` function does not return the right value."

    assert weird_number(0) == weird_number("0") == 1.0, "`weird_number(0)` does not return the right value."
    assert weird_number(1) == weird_number("1") == 2.0, "`weird_number(1)` does not return the right value."
    assert weird_number(2) == weird_number("2") == 9.0, "`weird_number(2)` does not return the right value."
    assert weird_number(3) == weird_number("3") == 28.0, "`weird_number(3)` does not return the right value."
    assert weird_number(4) == weird_number("4") == 65.0, "`weird_number(4)` does not return the right value."
    assert weird_number(5) == weird_number("5") == 126.0, "`weird_number(5)` does not return the right value."
    assert weird_number(6) == weird_number("6") == 217.0, "`weird_number(6)` does not return the right value."

    assert weird_number(-1) == weird_number("-1") == 0.0, "`weird_number(-1)` does not return the right value."
    assert weird_number(-2) == weird_number("-2") == -7.0, "`weird_number(-2)` does not return the right value."
    assert weird_number(-3) == weird_number("-3") == -26.0, "`weird_number(-3)` does not return the right value."
    assert weird_number(-4) == weird_number("-4") == -63.0, "`weird_number(-4)` does not return the right value."
    assert weird_number(-5) == weird_number("-5") == -124.0, "`weird_number(-5)` does not return the right value."
    assert weird_number(-6) == weird_number("-6") == -215.0, "`weird_number(-6)` does not return the right value."
