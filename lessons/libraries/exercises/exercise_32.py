import scipy
import matplotlib.pyplot as plt
import numpy as np
from time import perf_counter as pc


def splitter():
    img = scipy.datasets.face()
    arrayred = np.array(img)
    arraygreen = np.array(img)
    arrayblue = np.array(img)
    timesum = 0
    
    for i in range( 0, 3):
        start = pc()
        if i == 0:
            arraygreen[ :, :, i] = 0
            arrayblue[ :, :, i] = 0
        elif i == 1:
            arrayred[ :, :, i] = 0
            arrayblue[ :, :, i] = 0
        elif i == 2:
            arrayred[ :, :, i] = 0
            arraygreen[ :, :, i] = 0
        
        time = pc() - start
        
        timesum += time       
        print(time)
    print(timesum)
        
    # start1 = pc()
    # arrayred[ :, :, 1] = 0
    # arrayred[ :, :, 2] = 0
    # timered = pc() - start1
    
    # start2 = pc()
    # arraygreen[ :, :, 0] = 0
    # arraygreen[ :, :, 2] = 0
    # timegreen = pc() - start2
    
    # start3 = pc()
    # arrayblue[ :, :, 0] = 0
    # arrayblue[ :, :, 1] = 0
    # timeblue = pc() - start3
    
    plt.imshow(arrayred)
    plt.show()

    plt.imshow(arraygreen)
    plt.show()

    plt.imshow(arrayblue)
    plt.show()


splitter()
