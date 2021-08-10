var SOCKET = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@kline_1m");
const RSI_PERIOD = 15;
var closes = [];
/*/"wss://stream.binance.com:9443/ws/ethusdt@kline_1m*/
var dataDiv = document.getElementById('viewData')

SOCKET.onmessage = function bindata(bdata) {
	
	var json_bdata = JSON.parse(bdata.data);
	console.log(json_bdata.k.x);
	//dataDiv.append(closes);
		if(json_bdata.k.x == true){
				
				closes.push(parseFloat(json_bdata.k.c));
				console.log(closes.length);
    }
		if(closes.length >= RSI_PERIOD ){
    console.log("limit reached");
    console.log(closes);
    closes_json = JSON.stringify(closes);
    console.log(closes_json);
    const Http = new XMLHttpRequest();
    const url='https://still-binance.herokuapp.com/';
    Http.open("POST", url, true);
    Http.send(closes_json);
    Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(Http.responseText);
    dataDiv.append(Http.responseText);
    closes = [];
  }
 
  };
  /*  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    dataDiv.append(Http.responseText);
    closes = [];
    }
	*/
	}
	}
