#!/usr/bin/env python3
count = 0
N = 1041
N=bin(N)
print(N)
bin_count = []
for i in N:
    print(type(i))
    if(i=="1"):
            ones = True
            while(ones):
                if(i=="0"):
                    count+=1
                else:
                    bin_count.append(count)
                    ones=False
print(bin_count)