const name1=document.querySelector(".name")
const age1=document.querySelector(".age")
const btn=document.querySelector(".submit")
let image=<img src="https://picsum.photos/200/300" alt="" />

btn.addEventListener("click",()=>{
  let name2=name1.value;
  let age2=age1.value;


if(age2<18){
  alert(name2+"you not elgebal");
}
  else if(age2==18){
    alert("congraletions for your new vote")
  }else{
    alert("your can elgebal")
  }
})







function hi(){
  return(image)

 
}

 export default hi;
