import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    unknown = getattr(module, "unknown", None)
    assert unknown == "What am I?", "The variable `unknown` has been modified."

    known_type = getattr(module, "known_type", None)
    assert known_type is not None, "You have not defined the variable `known_type`."
    assert isinstance(known_type, type), f"The variable `known_type` has got type {type(known_type).__name__}, expected `type`."
    assert known_type == str, "The variable `known_type` has the wrong value."
