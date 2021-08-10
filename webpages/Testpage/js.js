myID = document.getElementById("footer");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >=   1200) {
        myID.className = "divH show"
    } 
    else {
        myID.className = "divH hide"
    }
};

window.addEventListener("scroll", myScrollFunc);