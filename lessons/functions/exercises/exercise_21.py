def sum_up(*args):
    """Doubles the sum of args."""
    sum = 0

    for i in args:
        sum += i

    sum = sum * 2
    return sum
