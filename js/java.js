
function showElements(){
    document.getElementById('contentCard').style.display="block";
}
function valentine(){
    document.getElementById("contentCard").classList.add("valentineS");
    document.getElementById("contentCard").classList.remove("birthdayS");
    document.getElementById("contentCard").classList.remove("motivationS");
    
}
function birthday(){
    document.getElementById("contentCard").classList.add("birthdayS");
    document.getElementById("contentCard").classList.remove("valentineS");  
    document.getElementById("contentCard").classList.remove("motivationS");
    
}
function motivation(){
    document.getElementById("contentCard").classList.remove("valentineS");
    document.getElementById("contentCard").classList.remove("birthdayS");
    document.getElementById("contentCard").classList.add("motivationS");
}
function sendPhoto(namePhoto){
    document.getElementById('imageChosen').src = "./images/img-" + namePhoto + ".png";
}
var title = document.getElementById("titleCard");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.titleUsed').innerHTML=inputtext;
});

var title = document.getElementById("subtitleCard");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.subtitleUsed').innerHTML=inputtext;
});

var title = document.getElementById("nameCard");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.author').innerHTML=inputtext;
});

var title = document.getElementById("messageCard");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.textUsed').innerHTML=inputtext;
});

var dateShow = new Date();
document.getElementById('chooseDate').innerHTML = dateShow;

function pink(){
    document.getElementById('contentCard').style.backgroundColor="#fcbad9";
}
function purple(){
    document.getElementById('contentCard').style.backgroundColor="#dda6f7";
}
function blue(){
    document.getElementById('contentCard').style.backgroundColor="#93befd";
}