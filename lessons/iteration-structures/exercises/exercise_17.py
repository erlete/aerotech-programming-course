data: list[int] = list(range(1, 101))  # Do not modify this line.

log: list[str] = []

for i in data:
    if i % 15 == 0:
        log.append("FizzBuzz")
    elif i % 3 == 0:
        log.append("Fizz")
    elif i % 5 == 0:
        log.append("Buzz")
    else:
        log.append("idk")
