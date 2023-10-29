"""Module."""


class Coordinate:
    """Class Coordinate.

    This class represent a real coordinate realy useful for
    calculate distance between coordinates and represent figures like
    squares, triangles, rectangles and others.

    Attributes:
        x (float): coordinate x.
        y (float): coordinate y.
    """

    def __init__(self, x: float, y: float) -> None:
        """Initialize a Coordinate instance.

        Args:
            x (float): coordinate x.
            y (float): coordinate y.
        """
        self.x: float = x
        self.y: float = y
