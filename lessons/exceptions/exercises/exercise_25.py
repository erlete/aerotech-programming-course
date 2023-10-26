def weird_number(arg):
    if not isinstance(arg, (int, float, str)):
        raise TypeError("this function only accepts integers, floats and strings.")
    
    try:
        arg = float(arg)
    except:
        arg = 0
        arg = float(arg)
    else:
        arg = arg**3
    finally:
        arg += 1
        return arg
