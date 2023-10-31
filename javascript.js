function topNav(){
    var x = document.getElementById("topNavbar");
    if(x.className == "header"){
        x.className += " responsive";
    } else{
        x.className = "header";
    }
}