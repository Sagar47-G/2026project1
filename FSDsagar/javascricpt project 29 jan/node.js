const winner=document.querySelector("h2");

const dice1=document.querySelector(".img1")
const dice2=document.querySelector(".img2")
const play=document.querySelector("button")



play.addEventListener("click",play_game)
function play_game(){
    let player1value=Math.floor(Math.random()*6)+1;
    let player2value=Math.floor(Math.random()*6)+1;
console.log(player1value,player2value);
    let dice1Img="dice"+player1value+".png";
    let dice2Img="dice"+player2value+".png";

    dice1.setAttribute("src",dice1Img)
    dice2.setAttribute("src",dice2Img)


    if(player1value>player2value){
        winner.innerText="player1 in winner"
    }
    
    else if(player1value==player2value){
        winner.innerText="Draw the match";
    }
    
    else{
        winner.innerText="player2 in winner";
    }


}