<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Login</title>
</head>
<body id="body">
	<?php 
	
    if (isset($_POST['submit'])) {
    	require("con.php");
    	$email = mysqli_escape_string($con, $_POST['email']);
    	$password = mysqli_escape_string($con, $_POST['password']);
    	$password = md5($password);
    	echo $Password;
    	$myquery = " SELECT * FROM users WHERE email='$email' AND password='$password'";
    	$query = mysqli_query($con, $myquery);
    	if(mysqli_num_rows($query) >0 ) {
    		echo("success");
    		$row = mysqli_fetch_assoc($query);
    		$user = $row['username'];
    		session_start();
    		$_SESSION['username'] = $user;
    		header('Location: post.php');

    	}
    	else{
    		echo "failed". $password;
    	}
    	$con.close();
    }


	 ?>
	<div class="container">
	<nav class="containerleft">
		<h1>Login:</h1>
	</nav>
	<nav class="containerright">
		<form action="login.php" method="post" enctype="multipart/form-data">
			<h2>Login:</h2>
			<input type="text" name="email" placeholder="Example@yahoo.com...">
			<input type="password" name="Password" placeholder="Password...">
			<input type="submit" name="submit" value="Login">
			<P>Not an Admin? <a href="register.php">Register</a></P>
		</form>
	</nav>
</div>
</body>
</html>