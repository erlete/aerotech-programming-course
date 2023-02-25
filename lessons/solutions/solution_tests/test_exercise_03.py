import importlib
from os.path import basename

i = basename(__file__)[-4]
module = importlib.import_module(f".exercise_{i}", package="solutions")
