def weird_number(a):
    if not isinstance(a, (str, float, int)):
        raise TypeError(
            "this function only accepts integers, floats or strings")
    try:
        value = float(a) ** 3
    except:
        value = 0
    finally:
        value += 1
    return value
