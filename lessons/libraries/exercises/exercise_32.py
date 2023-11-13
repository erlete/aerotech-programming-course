import scipy
import numpy as np
import matplotlib.pyplot as plt
from time import perf_counter as pc


def splitter() -> list:
    """Get the list of three color channel images.

    Returns:
        list: list of 3 images.
    """
    img = scipy.datasets.face()

    plt.imshow(img)
    plt.show()

    red = np.array(img)
    green = np.array(img)
    blue = np.array(img)
    split = []

    count = pc()

    red[:, :, 1:3] = 0
    green[:, :, 0:3:2] = 0
    blue[:, :, -3:-1] = 0



    time = pc() - count
    split.append(red)
    split.append(green)
    split.append(blue)

    plt.imshow(red)
    plt.show()
    plt.imshow(green)
    plt.show()
    plt.imshow(blue)
    plt.show()
    print(time)
    return split

