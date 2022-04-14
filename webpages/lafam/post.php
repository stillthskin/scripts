<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<title>Admin</title>
</head>
<body id="body">
	<?php 
    if (isset($_POST['submit'])) {
    	require("conect.php");
    	$tittle = mysqli_escape_string($con, $_POST['tittle']);
    	$price = mysqli_escape_string($con, $_POST['price']);
    	$descript = mysqli_escape_string($con, $_POST['descript']);
    	$postimg = $_FILES["postimg"]["name"];
    	$posterror = $_FILES["postimg"]["error"];
    	$tempname = $_FILES["postimg"]["tmp_name"];
    	$folder = "images/".$postimg;
    	$myquery = "INSERT INTO mypost(tittle, postimg, description, price) VALUES('$tittle', '$postimg', '$descript', '$price')";
    	$query = mysqli_query($con,$myquery);

    	if(move_uploaded_file($tempname, $folder)){
    		echo "File uploaded succesfully";
    	}
    	else{
    		echo $posterror;
    	}
    	if ($query) {
    		echo("success");
    	}
    	else{
    		echo "Falied";
    	}
    	$con.close();
       }

	 ?>\
<button class="backtoroot">
<a class="homelink" href="index.php"><i class="fa fa-home"></i></a>
</button>
<div class="container">
	<nav class="containerleft">
		<h1>Admin Post</h1>
		<p>Welcome User</p>
	</nav>
	<nav class="containerright">
		<form action="post.php" method="post" enctype="multipart/form-data">
			<input type="text" name="tittle" placeholder="Tittle...">
			<input type="text" name="price" placeholder="Price...">
			<textarea name="descript" placeholder="More info...">
				
			</textarea>
			<input type="file" name="postimg">
			<input type="submit" name="submit" value="Post">
		</form>
	</nav>
</div>
</body>
</html>