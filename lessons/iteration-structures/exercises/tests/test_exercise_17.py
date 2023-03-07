import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    data = getattr(module, "data", None)
    assert data == list(range(1, 101)), "The variable `data` has been modified."

    log_valid = ["FizzBuzz" if n % 15 == 0 else "Fizz" if n % 3 == 0 else "Buzz" if n % 5 == 0 else "idk" for n in data]
    log = getattr(module, "log", None)
    assert log is not None, "You have not defined the variable `log`."
    assert isinstance(log, (list, set, tuple)), f"The variable `log` has got type {type(log).__name__}, expected `(list, set, tuple)`."
    assert log == log_valid, "The variable `log` has the wrong value."
