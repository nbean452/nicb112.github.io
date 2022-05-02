function wip(){
    alert("currently Work In Progress! More to Come! Try clicking on the Projects!");
}

var home = document.getElementById("home");
var contact = document.getElementById("contact");
var projects = document.getElementById("projects");
var about = document.getElementById("about");

function toElement(element){
    if(element=="home"){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else{
        element.scrollIntoView({block: "start", inline: "nearest"});
    }
}