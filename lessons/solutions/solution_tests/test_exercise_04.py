import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

value = getattr(module, "value", None)
casted = getattr(module, "casted", None)


def test():
    assert value == 123, "You have modified the `value` variable"
    assert casted is not None, "You have not defined variable `casted`"
    assert isinstance(casted, str), f"The value of the casted variable should be a str, not {type(casted).__name__}"
    assert casted == "123", "The value of the casted variable is not correct"
