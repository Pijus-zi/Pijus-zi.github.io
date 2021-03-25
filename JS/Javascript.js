// JavaScript Document
var header = document.getElementById("header");
var date = new Date();
var hours = date.getHours();

if (hours >= 5 && hours < 10) {
    header.innerText = "God morgen";
}

if (hours >= 11 && hours < 16) {
    header.innerText = "God dag"
}

if (hours >= 17 && hours < 18) {
    header.innerText = "God ettermiddag"
}

if (hours >= 19 && hours < 23) {
    header.innerText = "God kveld"
}

if (hours >= 00 && hours < 04) {
    header.innerText = "God natt"
}



setInterval(displayclock, 500); 
function displayclock () {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs == 0) {
        hrs = 12;
    }

    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' +sec;
}