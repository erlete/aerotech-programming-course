import importlib
from os.path import basename

i = basename(__file__)[-4]
module = importlib.import_module(f".exercise_{i}", package="solutions")

unknown = getattr(module, "unknown", None)
known = getattr(module, "known", None)


def test():
    assert unknown == "What am I?", "You have modified the `unknown` variable"
    assert known is not None, "You have not defined variable `known`"
    assert known is str, "The type was not detected correctly"
