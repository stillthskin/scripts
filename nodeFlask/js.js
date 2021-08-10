const WebSocket = require('ws');
var port = process.env.PORT || 5000;
var DOGESOCKET = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@kline_1m");
var BITSOCKET = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
const RSI_PERIOD = 15;
var dogecloses = [];
var bitcloses = [];
//"wss://stream.binance.com:9443/ws/ethusdt@kline_1m
//var dataDiv = document.getElementById('viewData')
console.log("Starting...")
DOGESOCKET.onmessage = function bindata(bdata) {
	var json_bdata = JSON.parse(bdata.data);
	//dataDiv.append(closes);
	if(json_bdata.k.x == true){
	  dogecloses.push(parseFloat(json_bdata.k.c));
	  console.log(dogecloses.length);
    }
		if(dogecloses.length >= RSI_PERIOD){
    dogecloses_json = JSON.stringify(dogecloses);
    console.log("Posting...");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const Http = new XMLHttpRequest();
    const url='https://still-binance.herokuapp.com/doge';
    Http.open("POST", url, true);
    Http.send(dogecloses_json);
      Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(Http.responseText);
    //dataDiv.append(Http.responseText);
    dogecloses = [];
  }
  };
	}
	}
BITSOCKET.onmessage = function bitdata(bdata) {
	var json_bdata = JSON.parse(bdata.data);
	//dataDiv.append(closes);
	if(json_bdata.k.x == true){
	  bitcloses.push(parseFloat(json_bdata.k.c));
	  console.log(bitcloses.length);
    }
if(bitcloses.length >= RSI_PERIOD){
    bitcloses_json = JSON.stringify(bitcloses);
    console.log("Posting...");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const Http = new XMLHttpRequest();
    const url='https://still-binance.herokuapp.com/bit';
    Http.open("POST", url, true);
    Http.send(bitcloses_json);
      Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(Http.responseText);
    //dataDiv.append(Http.responseText);
    bitcloses = [];
  }
  };
	}
	}
		
