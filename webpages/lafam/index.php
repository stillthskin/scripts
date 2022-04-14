<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<link rel="shortcut icon" href="/img/hit.png" type="image/x-icon">
	<title>FamStudio</title>
</head>
<body id="body">
	<div id="popupcont">
			<!--<nav class="popup">
				<button class="popupclose">
					<h2>X</h2>
				</button>
				<br>
				<img src="" alt="Product">
				<nav id="popupdesk">
					<h3></h3>
					<p>
					</p>
				</nav>
				<button class="Buy">Add To Cart</button>
			</nav>--> 
		</div>
	<section class="top">
		<div class="navi">
			<nav class="menu1">
				<p class="sitename">Fam Studio</p>
			<nav class="menuname"></nav>
			</nav>
			<nav class="menu2"> <button id="menuBtn"><i class="fa fa-bars"></i></button></nav>
		</div>
		<div id="menudiv">
			<ul>
				<li><a href="Contact.php">Contact</a></li>
				<li><a href="login.php">Login</a></li>
				<li><a href="#" id="cartbtn">Cart</a></li>
			</ul>
		</div>
		<div id="cart-container">
			<div id="closecart"><i class="fa fa-times"></i></div>
			<div class="cart-row">
			<span class="cart-column"><h2>Item</h2></span>
			<span class="cart-column"><h2>Quantity</h2></span>
			<span class="cart-column"><h2>Price</h2></span>
			<span class="cart-column"></span>
		</div>
		<div class="cart-items">
		<div class="cart-row">
			<span class="cart-column cart-image"><img src="img/1.jpg"></span>
			<span class="cart-column "><input class ="cart-quantity"type="number" name="" value="1"></span>
			<span class="cart-column cart-price">$10</span>
			<span class="cart-column removeCart"><button>Remove</button></span>
		</div>
		<div class="cart-row">
			<span class="cart-column cart-image"><img src="img/2.jpg"></span>
			<span class="cart-column "><input class ="cart-quantity"type="number" name="" value="1"></span>
			<span class="cart-column cart-price">$12</span>
			<span class="cart-column removeCart"><button>Remove</button></span>
		</div>
		<div class="cart-row">
			<span class="cart-column cart-image"><img src="img/3.jpeg"></span>
			<span class="cart-column "><input class ="cart-quantity"type="number" name="" value="1"></span>
			<span class="cart-column cart-price">$119</span>
			<span class="cart-column removeCart"><button>Remove</button></span>
		</div>
		<div class="cart-row">
			<span class="cart-column cart-image"><img src="img/1.jpg"></span>
			<span class="cart-column "><input class ="cart-quantity"type="number" name="" value="1"></span>
			<span class="cart-column cart-price">$112</span>
			<span class="cart-column removeCart"><button>Remove</button></span>
		</div>
		</div>
		<div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$39.97</span>
            </div>
            <button class="checkout">Check Out</button>
		</div>
		<div class="searchsect">
			<input type="search" name="searchQ" placeholder="Search...">
			<input type="submit" name="submit" value="Search">
		</div>
		<div class="logocont">
			<div class="logo">
				<img src="/img/hit.png" alt="Logo">
			</div>
		</div>
	</section>
	<section class="mid">
		<?php require("conect.php"); ?>
		<div class="gallery">
			<?php
            $query = "SELECT * FROM mypost";
            $result = mysqli_query($con, $query);
            $myresult = mysqli_num_rows($result);
            if ($myresult) {
            	//echo "success";
            }
            while ($row = mysqli_fetch_assoc($result)) {
            $tittle =$row["tittle"];
            $image = $row["postimg"];
            $price = $row["price"];
            $descript = $row["description"];
            ?>
            <div class="card">
				<div class="imgcont">
					<div><?php echo '<img class="item-image" src="./images/'.$image.'" alt="Item">'; ?></div>
				</div>	
				<div class="desccont">
					<div class="item-tittle"><?php echo $tittle; ?></div>
					<div class="item-descript"><?php echo $descript; ?></div>
					<div class="item-price"><?php echo $price;  ?></div>
				</div>
				<button class="galnavibtn">
					View
				</button>		
			</div>
			<?php 
            }
           

			  ?>
    	</div>
		
	</section>
	<section class="low">
	</section>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/cartScript.js"></script>
</body>
</html>