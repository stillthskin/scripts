#!/#!/usr/bin/env python3
from flask import Flask, request, render_template, jsonify
import websocket, json, pprint, numpy, talib
import config
from binance.client import Client
from binance.enums import * 
np_closes = []
web_array = []
RSI_PERIOD = 14
RSI_OVERBOUGHT = 80
RSI_OVERSOLD = 20
DOGETRADE_SYMBOL = "DOGEUSDT"
BITTRADE_SYMBOL = "BTCUSDT"
DOGETRADE_QUANTITY = 100
BITTRADE_QUANTITY = 0.00246

#in_position = True
          
        
app = Flask(__name__)
@app.route("/")
def hello():
    return render_template('index.html')
    
@app.route('/doge', methods=['GET', 'POST'])
def receive_array_doge():
    last_rsi = 0
    global np_closes
    if request.method == 'POST':
       web_array = json.dumps(request.get_json('dogecloses_json'))
       web_array = json.loads(web_array)
       client = Client(config.API_KEY, config.API_SECRET)
       def order(side, quantity, symbol,order_type=ORDER_TYPE_MARKET):
           try:
               print("sending order")
               order = client.create_order(symbol=symbol, side=side, type=order_type, quantity=quantity)
               print(order)
           except Exception as e:
               print("an exception occured - {}".format(e))
               return False
           return True
       
       np_closes = numpy.array(web_array)
       rsi = talib.RSI(np_closes, RSI_PERIOD)
       #np_closes = list(np_closes)
       np_closes = json.dumps(list(np_closes.astype(float)))
       web_array = json.dumps(web_array)
       last_rsi = rsi[-1]
       if last_rsi > RSI_OVERBOUGHT:
         #if in_position:
           print("Overbought! Sell! Sell! Sell!")
           order_succeeded = order(SIDE_SELL, DOGETRADE_QUANTITY, DOGETRADE_SYMBOL)
           if order_succeeded:
             print("Sell Order success.")
         #else:
            # print("It is overbought, but we don't own any. Nothing to do.")
             #pass                 
       if last_rsi < RSI_OVERSOLD:
         #if in_position:
           #print("It is oversold, but you already own it, nothing to do.")
           #pass
         #else:
           print("Oversold! Buy! Buy! Buy!")
           # put binance buy order logic here
           order_succeeded = order(SIDE_BUY, DOGETRADE_QUANTITY, DOGETRADE_SYMBOL)
           if order_succeeded:
              print("Buy order success.")           
    return "Success", 200
@app.route('/bit', methods=['GET', 'POST'])
def receive_array_bit():
    last_rsi = 0
    global in_position
    global np_closes
    if request.method == 'POST':
       web_array = json.dumps(request.get_json('bitcloses_json'))
       web_array = json.loads(web_array)
       client = Client(config.API_KEY, config.API_SECRET)
       def order(side, quantity, symbol,order_type=ORDER_TYPE_MARKET):
           try:
               print("sending order")
               order = client.create_order(symbol=symbol, side=side, type=order_type, quantity=quantity)
               print(order)
           except Exception as e:
               print("an exception occured - {}".format(e))
               return False
           return True
       
       np_closes = numpy.array(web_array)
       rsi = talib.RSI(np_closes, RSI_PERIOD)
       #np_closes = list(np_closes)
       np_closes = json.dumps(list(np_closes.astype(float)))
       web_array = json.dumps(web_array)
       last_rsi = rsi[-1]
       print(last_rsi)
       if last_rsi > RSI_OVERBOUGHT:
         #if in_position:
           print("Overbought! Sell! Sell! Sell!")
           order_succeeded = order(SIDE_SELL, BITTRADE_QUANTITY, BITTRADE_SYMBOL)
           if order_succeeded:
             print("Sell Order success.")
         #else:
            # print("It is overbought, but we don't own any. Nothing to do.")
             #pass                 
       if last_rsi < RSI_OVERSOLD:
         #if in_position:
           #print("It is oversold, but you already own it, nothing to do.")
           #pass
         #else:
           print("Oversold! Buy! Buy! Buy!")
           # put binance buy order logic here
           order_succeeded = order(SIDE_BUY, BITTRADE_QUANTITY, BITTRADE_SYMBOL)
           if order_succeeded:
              print("Buy order success.")           
    return "Success", 200    

if __name__ == "__main__":
    app.run()


