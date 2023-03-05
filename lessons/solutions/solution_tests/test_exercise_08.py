import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    full_name = getattr(module, "full_name", None)
    assert full_name == "Ubuntu Nativo Molanes", "The variable `full_name` has been modified."

    reversed_name = getattr(module, "reversed_name", None)
    assert reversed_name is not None, "You have not defined the variable `reversed_name`."
    assert isinstance(reversed_name, str), f"The variable `reversed_name` has got type {type(reversed_name).__name__}, expected `str`."
    assert reversed_name == "senaloM ovitaN utnubU", "The variable `reversed_name` has the wrong value."
