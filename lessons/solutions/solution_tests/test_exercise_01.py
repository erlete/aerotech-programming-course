import importlib
from os.path import basename

i = basename(__file__)[-4]
module = importlib.import_module(f".exercise_{i}", package="solutions")

my_first_variable = getattr(module, "my_first_variable", None)


def test():
    assert my_first_variable is not None, "You have not defined variable `my_first_variable`"
    assert my_first_variable == 69, "The value of `my_first_variable` was not defined correctly"
