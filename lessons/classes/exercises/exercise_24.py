"""Module."""


class Coordinate:
    """Class Coordinate.

    This class represents coordinates (x, y) with the possibility
    to calculate the distance from origin and sum, mult, sub coords.

    Attributes:
        x (float): Coordinate x.
        y (float): Coordinate y.
    """

    def __init__(self, x: float, y: float) -> None:
        """Initialize a Coordinate instance.

        Args:
            x (float): Coordinate x.
            y (float): Coordinate y.
        """
        self._x: float = x
        self._y: float = y

    @property
    def x(self) -> float:
        """Get the x coordinate.

        Returns:
            float: x coordinate.
        """
        return float(self._x)

    @x.setter
    def x(self, x: float) -> None:
        """Set the value of the x coordinate.

        Args:
            x (float): coordinate x.
        """
        if not isinstance(x, int) and not isinstance(x, float):
            raise TypeError("The value must be a 'int' or 'float' type.")

        self._x = x

    @property
    def y(self) -> float:
        """Get the y coordinate.

        Returns:
            float: y coordinate.
        """
        return float(self._y)

    @y.setter
    def y(self, y: float) -> None:
        """Set the value of the y coordinate.

        Args:
            y (float): coordinate y.
        """
        if not isinstance(y, int) and not isinstance(y, float):
            raise TypeError("The value must be a 'int' or 'float' type.")

        self._y = y

    def distance_to_origin(self) -> float:
        """Get the distance from the origin to the coordinate.

        Returns:
            float: distance from (0, 0) to the coord.
        """
        return (self._x**2 + self._y**2)**.5

    def __add__(self, other):
        """Allows sum 2 coordinates using '+' operator.

        Args:
            other (Coordinate): second coordinate.

        Returns:
            Coordinate: sum of 2 coords.
        """
        addx: float = self._x + other._x
        addy: float = self._y + other._y

        return Coordinate(addx, addy)

    def __sub__(self, other):
        """Allows sub 2 coordinates using '-' operator.

        Args:
            other (Coordinate): second coordinate.

        Returns:
            Coordinate: sub of 2 coords.
        """
        subx = self._x - other._x
        suby = self._y - other._y

        return Coordinate(subx, suby)

    def __mul__(self, other):
        """Allows the multiplication of 2 coordinates using '*' operator.

        Args:
            other (Coordinate): second coordinate.

        Returns:
            Coordinate: mult of 2 coords.
        """
        mulx = self._x * other._x
        muly = self._y * other._y

        return Coordinate(mulx, muly)
