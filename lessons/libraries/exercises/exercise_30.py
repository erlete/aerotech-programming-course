import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 2*np.pi, .1)
plt.plot(x, np.sin(x))
y = np.sin(x)

plt.show()