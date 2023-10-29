def weird_number(arg: (float, int)) -> float:
    """Get the arg as float.

    Args:
        arg (float, int): the weird number.

    Returns:
        float:the weird number as float.
    """
    if not isinstance(arg, (int, float, str)):
        raise TypeError("this function only accepts integers, floats and strings.")

    try:
        arg: float = float(arg)
    except:
        arg = 0.0
    else:
        arg = arg**3
    finally:
        arg += 1
        return arg
