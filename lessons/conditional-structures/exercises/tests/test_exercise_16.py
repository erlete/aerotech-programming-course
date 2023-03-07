import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    n = getattr(module, "n", None)
    assert n == 2, "The variable `n` has been modified."

    message = getattr(module, "message", None)
    assert message is not None, "You have not defined the variable `message`."
    assert isinstance(message, str), f"The variable `message` has got type {type(message).__name__}, expected `str`."
    assert message == "The number is positive and even", "The variable `message` has the wrong value."
