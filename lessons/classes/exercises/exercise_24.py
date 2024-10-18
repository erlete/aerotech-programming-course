class Coordinate:
    def __init__(self, a, b):
        self._x = a
        self._y = b

    @property
    def x(self):
        return float(self._x)

    @x.setter
    def x(self, value):
        if not isinstance(value, (float, int)):
            raise TypeError("TypeError")

    @property
    def y(self):
        return float(self._y)

    @y.setter
    def y(self, value):
        if not isinstance(value, (float, int)):
            raise TypeError("TypeError")

    def distance_to_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

    def __add__(self, other):
        return Coordinate(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Coordinate(self.x - other.x, self.y - other.y)
