const WebSocket = require('ws');
var port = process.env.PORT || 5000;
var SOCKET = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@kline_1m");
const RSI_PERIOD = 15;
var closes = [];
//"wss://stream.binance.com:9443/ws/ethusdt@kline_1m
//var dataDiv = document.getElementById('viewData')
console.log("Starting...")
SOCKET.onmessage = function bindata(bdata) {
	
	var json_bdata = JSON.parse(bdata.data);
		//dataDiv.append(closes);
		if(json_bdata.k.x == true){
				
				closes.push(parseFloat(json_bdata.k.c));
				console.log(closes.length);
    }
		if(closes.length >= RSI_PERIOD){
    closes_json = JSON.stringify(closes);
    console.log("Posting...");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const Http = new XMLHttpRequest();
    const url='https://still-binance.herokuapp.com/';
    Http.open("POST", url, true);
    Http.send(closes_json);
      Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(Http.responseText);
    //dataDiv.append(Http.responseText);
    closes = [];
  }
  };
	}
	}
	
