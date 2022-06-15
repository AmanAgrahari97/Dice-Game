function randomNumber(){
var randomNumber1=Math.random();
randomNumber1 = Math.floor((randomNumber1)*6) + 1;
return randomNumber1;
}

var player1=randomNumber();
var player2=randomNumber();
document.querySelector("img.img1").setAttribute("src", "images/dice"+player1+".png");
document.querySelector("img.img2").setAttribute("src", "images/dice"+player2+".png");

if(player1===player2){
    document.querySelector("h1").innerHTML="Draw!";
    refreshTime();
}
else if(player1>player2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    refreshTime();
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    refreshTime();
}

function refreshTime(){
    setTimeout(function(){
        document.querySelector("h1").innerHTML="Refresh Me!";
    },4000);
}