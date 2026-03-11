const buttons=document.querySelectorAll(".frame").length;
const button=document.querySelectorAll(".frame")


for(let i=0;i<buttons;i++){
    button[i].addEventListener("click",()=>{
        let val=button[i].innerText;
        play(val)
        })
}
// play("a")
  function play(val){
switch(val){
    case "a":
        let a=new Audio("./sound/crash.mp3")
        a.play();
        // console.log(g);
        break;
    case "s":
        let s=new Audio("./sound/kick-bass.mp3")
        s.play();
        break;
    case "d":
        let d=new Audio("./sound/snare.mp3")
        d.play();
        break;
    case "f":
        let f=new Audio("./sound/tom-1.mp3")
        f.play();
        break;
    case "g":
        let g=new Audio("./sound/tom-2.mp3")
        g.play();
        break;
    case "j":
        let j=new Audio("./sound/tom-3.mp3")
        j.play();
        break;
    case "h":
        let h=new Audio("./sound/tom-4.mp3")
        h.play();
        break;
}


        
}
// document.addEventListener("keypress",(z)=>{
//     play(z.key)
// })
