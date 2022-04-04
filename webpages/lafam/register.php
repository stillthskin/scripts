<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Register</title>
</head>
<body id="body">
	<?php 
    if (isset($_POST['submit'])) {
    	$con = mysqli_connect("localhost", "still", "still1234", "famstudio");
    	$theEmail = mysqli_escape_string($con, $_POST['email']);
    	$username = mysqli_escape_string($con, $_POST['username']);
    	$password = mysqli_escape_string($con, $_POST['password1']);
    	$password2 =mysqli_escape_string($con, $_POST['password2']);
    	$isAdmin = 'False';
    	//echo $theEmail . $username . $password . $theEmail;
    	if ($password == $password2) {
    		$password = md5($password);
    		$myquery = "INSERT INTO users(username, email, password, isadmin) VALUES('$username', '$theEmail', '$password', '$isAdmin' ) ";
    		$query = mysqli_query($con, $myquery);
    	if ($query) {
    		echo("success");
    		header("Location: login.php");
    	}
    	else{
    		echo "failed.".mysqli_error($con);
    	}
    	}
    	else{
    		echo "Passwords do not match";
    	}
    	
    	$con.close();
    }


	 ?>
<div class="container">
	<nav class="containerleft"></nav>
	<nav class="containerright">
		<form action="register.php" method="post" enctype="multipart/form-data">
			<h2>Register:</h2>
			<input type="email" name="email" placeholder="Example@yahoo.com...">
			<input type="text" name="username" placeholder="Username...">
			<input type="password" name="Password1" placeholder="Password...">
			<input type="password" name="Password2" placeholder="Confirm Password...">
			<input type="submit" name="submit" value="Register">
			<p>Already have an account? <a href="login.php">Login</a></p>
		</form>
	</nav>
</div>
</body>
</html>