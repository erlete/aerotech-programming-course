import importlib
from os.path import basename

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="solutions")

def test():
    value_1 = getattr(module, "value_1", None)
    assert value_1 == -1, "The variable `value_1` has been modified."

    value_2 = getattr(module, "value_2", None)
    assert value_2 == 5, "The variable `value_2` has been modified."

    eq = getattr(module, "eq", None)
    assert eq is not None, "You have not defined the variable `eq`."
    assert isinstance(eq, bool), f"The variable `eq` has got type {type(eq).__name__}, expected `bool`."
    assert eq == False, "The variable `eq` has the wrong value."

    ne = getattr(module, "ne", None)
    assert ne is not None, "You have not defined the variable `ne`."
    assert isinstance(ne, bool), f"The variable `ne` has got type {type(ne).__name__}, expected `bool`."
    assert ne == True, "The variable `ne` has the wrong value."

    gt = getattr(module, "gt", None)
    assert gt is not None, "You have not defined the variable `gt`."
    assert isinstance(gt, bool), f"The variable `gt` has got type {type(gt).__name__}, expected `bool`."
    assert gt == False, "The variable `gt` has the wrong value."

    lt = getattr(module, "lt", None)
    assert lt is not None, "You have not defined the variable `lt`."
    assert isinstance(lt, bool), f"The variable `lt` has got type {type(lt).__name__}, expected `bool`."
    assert lt == True, "The variable `lt` has the wrong value."

    ge = getattr(module, "ge", None)
    assert ge is not None, "You have not defined the variable `ge`."
    assert isinstance(ge, bool), f"The variable `ge` has got type {type(ge).__name__}, expected `bool`."
    assert ge == False, "The variable `ge` has the wrong value."

    le = getattr(module, "le", None)
    assert le is not None, "You have not defined the variable `le`."
    assert isinstance(le, bool), f"The variable `le` has got type {type(le).__name__}, expected `bool`."
    assert le == True, "The variable `le` has the wrong value."
