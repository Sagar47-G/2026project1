const name=document.querySelector(".name")
const age=document.querySelector(".age")
const password=document.querySelector(".password")
const submit=document.querySelector(".submit")


submit.addEventListener("click",(e)=>{
    e.preventDefault();

    let  inputname=name.value;
    alert(inputname)
    let  inputage=age.value;
    alert(inputage)
    let  inputpass=password.value;
    alert(inputpass)
})

