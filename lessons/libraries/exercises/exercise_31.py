import numpy as np
import scipy.integrate as integrate
from time import perf_counter as pc

curr = pc()
riemann_integral = sum(np.sin(np.arange(0, np.pi/2, .05))*0.05)
t1 = pc() - curr
curr = pc()
f = lambda x: np.sin(x)
scipy_integral, error = integrate.quad(f, 0, np.pi/2)
t2 = pc() - curr

print(riemann_integral)
print("\nRiemann: ", t1)
print(scipy_integral)
print("\nScipy: ", t2)