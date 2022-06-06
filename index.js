// Getting value for player 1
var randomNumber1 = Math.floor(7*Math.random());
if(randomNumber1==1){
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice1.png");
}else if(randomNumber1==2){
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice2.png");
}else if(randomNumber1==3){
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice3.png");
}else if(randomNumber1==4){
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice4.png");
}else if(randomNumber1==5){
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice5.png");
}else{
    document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice6.png");
}
// Getting value for player 2
var randomNumber2 = Math.floor(7*Math.random());
if(randomNumber2==1){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice1.png");
}else if(randomNumber2==2){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice2.png");
}else if(randomNumber2==3){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice3.png");
}else if(randomNumber2==4){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice4.png");
}else if(randomNumber2==5){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice5.png");
}else{
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice6.png");
}
// Writing who is the winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}