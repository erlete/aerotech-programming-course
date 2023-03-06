import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    unknown = getattr(module, "unknown", None)
    assert unknown == "What am I?", "The variable `unknown` has been modified."

    known = getattr(module, "known", None)
    assert known is not None, "You have not defined the variable `known`."
    assert isinstance(known, str), f"The variable `known` has got type {type(known).__name__}, expected `str`."
