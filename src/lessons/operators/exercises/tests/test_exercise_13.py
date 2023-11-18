import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")

def test():
    vector_1 = getattr(module, "vector_1", None)
    assert vector_1 == (4, 5.4213), "The variable `vector_1` has been modified."

    vector_2 = getattr(module, "vector_2", None)
    assert vector_2 == (123, -412.21), "The variable `vector_2` has been modified."

    distance = getattr(module, "distance", None)
    assert distance is not None, "You have not defined the variable `distance`."
    assert isinstance(distance, float), f"The variable `distance` has got type {type(distance).__name__}, expected `float`."
    assert distance == 434.254421669705, "The variable `distance` has the wrong value."
