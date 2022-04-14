var galNavBtn = document.getElementsByClassName('galnavibtn');
var popupdiv = document.getElementById('popupcont');
var popupclose = document.getElementsByClassName('popupclose')[0];
var addCartBtn = document.getElementById('Buy');
var menuBtn = document.getElementById('menuBtn');
var menuDiv = document.getElementById('menudiv');
var cartpopupbtn = document.getElementById("cartbtn");
var cartdiv = document.getElementById("cart-container");
var closecartbtn = document.getElementById("closecart");
//*********************************************************************************

var addCartBtn = document.getElementsByClassName('addToCart');
var removeCartBtn = document.getElementsByClassName('removeCart');
var quntityElement = document.getElementsByClassName('cart-quantity');
var shoppingBtn = document.getElementsByClassName('shopping-cart-btn')[0];
var checkoutBtn = document.getElementsByClassName('checkout')[0];


  var xmlhttp = new XMLHttpRequest();
  var method = "GET";
  var asyncronous = true;
  var url = "index.php";
  
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
  };

for (var i = 0; i < galNavBtn.length; i++) {
	currentBtn = galNavBtn[i];
    currentBtn.addEventListener('click', addpopupFunc);
}
//popupclose.addEventListener('click', popupdivoff);
function popupdivon(tittle){
	//alert('Clicked');
    popupdiv.style.display = "block";
	popupdiv.innerHTML = tittle;
}
function popupdivoff(){
	console.log("clicked");
	popupdiv.style.display = "none";
	window.location.reload();
}
menuBtn.addEventListener('click', toggleMenuDiv);
menuDiv.style.display = "none";
function toggleMenuDiv(){
	if (menuDiv.style.display == "none") {
		menuDiv.style.display = "block";
	}
	else{
		menuDiv.style.display = "none";
	}
}

function tester(){
	alert(clicked);
}
function addpopupFunc(event){
 var current = event.target;
 currentParrentElement = current.parentElement;
 elementTittle = currentParrentElement.getElementsByClassName('item-tittle')[0].innerText;
 elementimg = currentParrentElement.getElementsByClassName('item-image')[0].src;
 elementPrice = currentParrentElement.getElementsByClassName('item-price')[0].innerText;
 elementdescript = currentParrentElement.getElementsByClassName('item-descript')[0].innerText;
 //console.log(elementTittle, elementimg, elementPrice);
 createPopupItem(elementimg, elementPrice, elementTittle);
}
function createPopupItem(elementimg, elementPrice, elementTittle){
	//var innerdiv = document.createElement("div");
	popupdiv.style.display = "block";
	var newcontent = `
			<nav class="popup">
				<button class="popupclose">
					<h2>X</h2>
				</button>
				<br>
				<img class="popupimg2" src="${elementimg}" alt="Product">
				<nav class="popupdesk">
					<h3 class="popuptittle2">${elementTittle}</h3>
					<p class="popupdesc2">
						${elementdescript}
					</p>
					<p class="popupprice2">${elementPrice}</p>
				</nav>
				<button class="Buy">Add To Cart</button>
			</nav>		
	`
	popupdiv.innerHTML = newcontent;
	popupdiv.getElementsByClassName('popupclose')[0].addEventListener('click', popupdivoff);
	popupdiv.getElementsByClassName('Buy')[0].addEventListener('click', addToCartFunc);
	return
}

function addToCartFunc(){
	alert("clicked");
var current = event.target;
 currentParrentElement = current.parentElement;
 elementTittle = currentParrentElement.getElementsByClassName('popuptittle2')[0].innerText;
 elementimg = currentParrentElement.getElementsByClassName('popupimg2')[0].src;
 elementPrice = currentParrentElement.getElementsByClassName('popupprice2')[0].innerText;
 elementdescript = currentParrentElement.getElementsByClassName('popupdesc2')[0].innerText;
 console.log(elementTittle, elementimg, elementPrice);
 updateTotal();
}

cartpopupbtn.addEventListener('click', cartdisplayfunc);
cartdiv.style.display = "none";

function cartdisplayfunc(){
	if(cartdiv.style.display == "none"){
		cartdiv.style.display = "block";
	}
    else{
    	cartdiv.style.display = "none";
    }

}
closecartbtn.addEventListener('click', function(){

	cartdiv.style.display = "none";
});


for (var i = 0; i < quntityElement.length; i++) {
	var current = quntityElement[i];
	current.addEventListener('change', quantityChange);
}


for (var i = 0; i < removeCartBtn.length; i++) {
	currentBtn = removeCartBtn[i];
	currentBtn.addEventListener('click', removeItem)
}

function removeItem(event) {
	var theClickedBtn = event.target;
	theClickedBtn.parentElement.parentElement.remove();
	updateTotal();
}

for (var i = 0; i < addCartBtn.length; i++) {
	currentBtn = addCartBtn[i];
    currentBtn.addEventListener('click', addCartFunc);
}
function quantityChange(event){
 var current = event.target;
 if (isNaN(current.value) || current.value <= 0 ) {
 	current.value = 1;
 	
 }
 updateTotal();
}
function updateTotal(){
	total = 0;
	var theConatiner = document.getElementsByClassName('cart-items')[0];
	var currentRows = theConatiner.getElementsByClassName('cart-row');

	for (var i = 0; i < currentRows.length; i++) {
		var currentRow = currentRows[i]
       var itemPrice = currentRow.getElementsByClassName('cart-price')[0];
       var quntityElement = currentRow.getElementsByClassName('cart-quantity')[0];
       var price = parseFloat(itemPrice.innerText.replace('$',''));
       var quntity = parseInt(quntityElement.value);
       total = total + (price * quntity);
       console.log(total);
	}
	var grandTotal = document.getElementsByClassName('cart-total-price')[0];
	grandTotal.innerText = total;
}
function createCartItem(elementimg, elementPrice, elementTittle){
	var newrow = document.createElement('div');
	var myCartItems = document.getElementsByClassName('cart-items')[0];
	var cartItemsNames = myCartItems.getElementsByClassName('cart-tittle');
	for (var i = 0; i < cartItemsNames.length; i++) {
		if(cartItemsNames[i].innerText == elementTittle){
			alert("Item already added.");
			return
		}
	}
	var newcontent = `
     <div class="cart-row">
			<span class="cart-column cart-image"><img src="${elementimg}"></span>
			<span class="cart-column cart-tittle">${elementTittle}</span>
			<span class="cart-column "><input class ="cart-quantity"type="number" name="" value="1"></span>
			<span class="cart-column cart-price">${elementPrice}</span>
			<span class="cart-column removeCart"><button>Remove</button></span>
		</div>
	`
	newrow.innerHTML = newcontent;
	console.log(myCartItems);
    myCartItems.append(newrow);
    newrow.getElementsByClassName('removeCart')[0].addEventListener('click', removeItem);
    newrow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChange);
}
checkoutBtn.addEventListener('click', checkoutfunc);

function checkoutfunc(){
	alert('checking out');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes){
    	cartItems.removeChild(cartItems.firstChild);
    	updateTotal();
    }
	
}