<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<link rel="shortcut icon" href="/img/hit.png" type="image/x-icon">
	<title>Contact</title>
</head>
<body id="body">
	<?php 
	
	
   if(isset($_POST['submit'])) {
   	    require("conect.php");
	if ($con) {
		echo 'success';
	}
	else{
		echo 'failed';
	}
   	    echo "SUCCESS";
        $username = mysqli_escape_string($con, $_POST['email']);
    	$password = mysqli_escape_string($con, $_POST['password']);
    	$password = md5($password);
    	$myquery = "SELECT * FROM users WHERE username='$username' AND passord='$password'";
    	$query = mysqli_query($con, $myquery);
    	if($query) {
    		echo "success";
    		$con.close();
    	}
    	
    else{
   	echo 'Unknown error';
     }
}

	 ?>
<button class="backtoroot">
<a class="homelink" href="index.php"><i class="fa fa-home"></i></a>
</button>
<div class="container">
	<nav class="containerleft">
		<h1>Contact US</h1>
	</nav>
	<nav class="containerright">
		<form action="Contact.php" method="post" enctype="multipart/form-data">
			<h2>Send us your feedback:</h2>
			<input type="email" name="myemail" placeholder="Example@yahoo.com...">
			<textarea name="feed" placeholder="Your feedback..."></textarea>
			<br>
			<input type="submit" name="submit" value="Send">
		</form>
	</nav>
</div>
</body>
</html>