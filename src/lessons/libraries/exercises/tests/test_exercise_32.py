import importlib
from os.path import basename
from typing import Any

import numpy as np
import scipy
from matplotlib import pyplot as plt

i = basename(__file__)[-5:-3]
module = importlib.import_module(f".exercise_{i}", package="exercises")


def solution() -> list[np.ndarray]:
    """Valid solution to the exercise.

    Returns:
        list[np.ndarray]: layers of the image.
    """
    layers = []
    img = scipy.datasets.face()
    for i in range(img.ndim):
        img_ = img.copy()

        for j in range(1, img.ndim):
            img_[:, :, i - j] = 0

        layers.append(img_)
        plt.imshow(img_)

    return layers


def equal(a: Any, b: Any) -> bool:
    """Compare the equality a pair of sequences recursively.

    Args:
        a (Any): first sequence.
        b (Any): second sequence.

    Returns:
        bool: whether both sequences are equal.
    """
    are_equal = True

    if isinstance(a, (np.ndarray, list)):
        for i in range(len(a)):
            if not equal(a[i], b[i]):
                are_equal = False
    else:
        return a == b

    return are_equal


def test():
    splitter = getattr(module, "splitter", None)
    assert splitter is not None, "You have not defined the function `splitter`."
    assert callable(splitter), "The variable `splitter` is not a function."

    assert equal(splitter(), solution()), "The layers do not match the expected result."
