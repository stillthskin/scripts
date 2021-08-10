#!/usr/bin/env python3
import pandas as pd
import keras
from keras import losses, optimizers, metrics
from keras.layers import Dense,activation
from keras.models import Sequential
from sklearn.model_selection import train_test_split

data = pd.read_csv('DOGE-USD.csv')
print(data)
closes = data['Close']
print(closes)
xTrain, xTest, yTrain, yTest = train_test_split(closes, closes, test_size = 0.2, random_state = 0)
model = Sequential()
model.add(Dense(8,activation='relu'))
model.add(Dense(16,activation='relu'))
model.add(Dense(1,activation='softmax'))
model.compile(loss = 'mean_squared_error',  
   optimizer = 'sgd', metrics = [metrics.categorical_accuracy])
model.fit(xTrain,yTrain,epochs=20)
print('xtrain = ')
print(len(xTrain))
print('xtest = ')
print(len(xTest))
