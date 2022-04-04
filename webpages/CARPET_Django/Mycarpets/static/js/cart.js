var addCartBtn = document.getElementsByClassName('addToCart');
var removeCartBtn = document.getElementsByClassName('removeCart');
var quntityElement = document.getElementsByClassName('cart-quantity');
var shoppingBtn = document.getElementsByClassName('shopping-cart-btn')[0];
var checkoutBtn = document.getElementsByClassName('checkout')[0];
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
function addCartFunc(event){
	console.log("clicked!");
 var current = event.target;
 currentParrentElement = current.parentElement.parentElement;
 elementTittle = currentParrentElement.getElementsByClassName('tittle')[0].innerText;
 elementimg = currentParrentElement.getElementsByClassName('itemImg')[0].src
 elementPrice = currentParrentElement.getElementsByClassName('price')[0].innerText;
 console.log(elementTittle, elementimg, elementPrice);
 createCartItem(elementimg, elementPrice, elementTittle);
 updateTotal();
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
shoppingBtn.addEventListener('click', showCart);
function showCart() {
var cartDiv = document.getElementsByClassName("cartDiv")[0];
 if (cartDiv.style.display === "none") {
     cartDiv.style.display = "flex";
 }
 else {
  cartDiv.style.display = "none";
 }
}
