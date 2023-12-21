var timer = 60;
var hitVal = 0;
var score = 0;


function makeBubble(){
    var clutter ="";

for(let i = 1; i<=160; i++){
    var num = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${num}</div>`;
}


document.querySelector(".botum").innerHTML = clutter;
 }
 
 
 function runTimer(){

   var timerint =  setInterval(function () {
       if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
       } 
       else{

        clearInterval(timerint);
        //after endinig of timer we clear all bubbles and give a msg "Game Over"
        document.querySelector(".botum").innerHTML = `<div><h1 id="msg">Game Over</h1>
        <h2 class="msg2">Your Score : ${score} </h2> </div>
        `;

       }
    },1000)
 }

 function changeHit(){
     hitVal = Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent = hitVal  
 }

 function updateScore(){
  score += 10;
  document.querySelector("#score").textContent = score;
 }

 document.querySelector(".botum").addEventListener("click", function(details){
    var clickNum = Number(details.target.textContent);
    if(clickNum === hitVal){
        updateScore();
        changeHit();
        makeBubble();
    }
 });

 makeBubble();
 runTimer();
 changeHit();
 