import numpy as np
import scipy.integrate as integ
from time import perf_counter as pc

start1 = pc()
riemann_integral = sum(np.sin(np.arange(0, np.pi / 2, 0.05)) * 0.05)

time1 = pc() - start1

f = lambda x: np.sin(x)
start2 = pc()

scipy_integral = integ.quad(f, 0, np.pi / 2)[0]

time2 = pc() - start2
print(riemann_integral)
print(f"{time1:.8f}")

print(scipy_integral)
print(f"{time2:.8f}")
    
