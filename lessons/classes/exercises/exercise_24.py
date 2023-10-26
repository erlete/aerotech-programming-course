class Coordinate:

    """Created a class Coordnite."""

    def __init__(self, x, y):
        """Built constructor."""
        self.x = x
        self.y = y

    @property
    def x(self):
        """Gets x.

        Returns:
            float: x.
        """
        return self.x

    @property
    def y(self):
        """Gets y.

        Returns:
            float: y.
        """
        return self.y

    @x.setter
    def x(self, value):
        """Set x.

        Args:
            value(float): x.
        """
        if not isinstance(value, float, int):
            raise TypeError(
                "expected type float for"
                + f" {self.__class__.__name__}.x but got"
                + f" {type(value).__name__} instead"
            )

        self.x = value

    @y.setter
    def y(self, value):
        """Set y.

        Args:
            value(float): y.
        """
        if not isinstance(value, float, int):
            raise TypeError(
                "expected type float for"
                + f" {self.__class__.__name__}.y but got"
                + f" {type(value).__name__} instead"
            )

        self.y = value
    
    def distance_to_origin(self):
        """Return distance to origin.
        
        Args:
            self(int/float): x, y.
        
        Returns:
            float: dist.
        """
        
        dist = ((self.x) ** 2 + (self.y) ** 2) ** 0.5
        
        return dist

    def __add__(self, other):
        """Sums two coordinates.
        
        Args:
            self, other (Coordinate): self.x, self.y, other.x, other.y.
        
        Returns:
            self (Coordinate): self.x, self.y.
        """
        
        self.x = self.x + other.x
        self.y = self.y + other.y
        
        return self
    
    def __subb__(self, other):
        """Substraction between two coordinates.
        
        Args:
            self, other (Coordinate): self.x, self.y, other.x, other.y.
        
        Returns:
            self (Coordinate): self.x, self.y.
        """
        
        self.x = self.x + other.x
        self.y = self.y + other.y
        
        return self
    