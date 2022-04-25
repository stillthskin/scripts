#!/usr/bin/env python3
a = [1,2,3,4,5,6,7,8,9]
k = 2
rotations = k % len(a)
print(rotations)
print(a[-rotations:])
print(a[:-rotations])
print(a[rotations:] + a[:rotations])
"""
def right_rotation(a, k):
   # if the size of k > len(a), rotate only necessary with
   # module of the division
   rotations = k % len(a)
   return a[-rotations:] + a[:-rotations]
"""
