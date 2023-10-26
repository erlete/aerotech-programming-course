def weird_number(arg):
    """Cheks if arg is int, float, or str."""

    if not isinstance(arg, (int, float, str)):
        raise TypeError("this function only accepts integers, floats and str.")

    try:
        arg = float(arg)

    except:
        arg = 0

    else:
        arg *= arg * arg

    finally:
        arg + 1

    return arg
