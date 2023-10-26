import math
import numpy as np
import matplotlib.pyplot as plt


x = np.arange(0, 2 * math.pi, 0.1)

y = np.array([math.sin(x) for x in x])

plt.plot(x, y)
plt.grid(True)
plt.show()
