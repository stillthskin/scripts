#!/usr/bin/env python3
import hashlib
class hasher:

      hash_var = input("Enter function to hash: ")

      def __init__(self):
          self.hash_var = 'Hello World'
          self.hash_func(self.hash_var)
      
      
      def hash_func(self, hash_var):
          return hashlib.sha256(str(hash_var).encode()).hexdigest()
          
          
      def capt_func(self):
          self.hash_var = input("Enter function to hash: ")
          
          return self.hash_var


newHasher = hasher()

def create_hash():
    to_hash = newHasher.capt_func()
    the_hash = newHasher.hash_func(to_hash)
    print(the_hash)
    pass

create_hash()
          
          
          
          




