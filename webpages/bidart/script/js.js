	var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['a','b', 'c', 'd','e'];

    var i = image.length;


    // function for next slide 

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+"Necklaces/"+image[i]+".jpg>";
    }


    // function for prew slide

    function prewImage(){

    	if (i>image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+"Necklaces/"+image[i]+".jpg>";

    }

  
  // script for auto image slider

  setInterval(nextImage , 4000);

function logins(){
	var username = document.logger.username.value;
	var password = document.logger.password.value;
	if(username!="admin"){
	window.alert("please enter a valid User name.");
}
	else{
		if(password!="pass"){
			window.alert("please enter a valid password");
		}
		else{
			window.alert("Succesful log in as " + username);
		}
	}
}
function registers(){
	var username = document.rogger.usernamesignup.value;
	var email = document.rogger.emailsignup.value;
	var pass1 = document.rogger.pass1.value;
	var pass2 = document.rogger.pass2.value;
	if(username==""){
	window.alert("please enter a valid User name.");
}
	else if(email==""){
	window.alert("please enter a valid User email.");
}
	else if(pass1!=pass2){
	window.alert("Password mis match");
}
}
function ala(){
	window.alert("bitch");
}