class Coordinate:
    
    def __init__(self, x, y):
        self._x = x
        self._y = y
    
    @property
    def x(self):
        return float(self._x)
    
    @x.setter
    def x(self, x):
        
        if not isinstance(x, int) and not isinstance(x, float):
            raise TypeError("The value must be a 'int' or 'float' type.")
        
        self._x = x
    
    @property
    def y(self):
        return float(self._y)
    
    @y.setter
    def y(self, y):
        if not isinstance(y, int) and not isinstance(y, float):
            raise TypeError("The value must be a 'int' or 'float' type.")
        
        self._y = y
    
    def distance_to_origin(self):
        
        return (self._x**2 + self._y**2)**.5
    
    def __add__(self, other):
        addx = self._x + other._x
        addy = self._y + other._y
        
        return Coordinate(addx, addy)
    
    def __sub__(self, other):
        subx = self._x - other._x
        suby = self._y - other._y
        
        return Coordinate(subx, suby)
    
    def __mul__(self, other):
        mulx = self._x * other._x
        muly = self._y * other._y
        
        return Coordinate(mulx, muly)

