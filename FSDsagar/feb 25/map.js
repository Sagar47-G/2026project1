const button=document.querySelector(".btn")
console.log(button)
let arr=[3,5,6,8,3,12,50];
button.addEventListener ("click",()=>{
let doubl=arr.map((a)=>{
    return  a+10
    
    
})
alert(doubl)
})
