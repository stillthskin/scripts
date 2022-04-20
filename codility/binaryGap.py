#!/usr/bin/env python3
def solution(N):
    ones = False
    count = 0
    N=bin(N)
    print(N)
    bin_count = []
    for i in N:
        if(i=="1") and (ones==False):   
            ones = True
        elif(i=="0") and (ones==True):
            count+=1
        elif(i=="1") and (ones==True):
            bin_count.append(count)
            ones =False
        else:
            ones=False
    return max(bin_count)

print(solution(6291457))
"""
def solution(N):
    # write your code in Python 3.6
    count = 0
    gap_list=[]
    bin_var = format(N,"b")
    for bit in bin_var:
        if (bit =="1"):
            gap_list.append(count)
            count =0
        else:
            count +=1
    return max(gap_list)
    """