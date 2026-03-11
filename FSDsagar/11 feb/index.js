const user_name=document.querySelector("input[type='text']")
const user_password=document.querySelector("input[type='password']")
const btn=document.querySelector("input[type='submit']")

let user=[
    {
        name:"sagar",
        password:"a"
    },
    {
        name:"aman",
        password:"b"
    },
    {
        name:"hd",
        password:"c"
    }
]
let nouser;
btn.addEventListener("click",()=>{
    let  user_name_input=user_name.value;
    let  user_password_input=user_password.value;
    
    user_name.value=""
    user_password.value=""
    let user_name_ver;
    let user_password_ver;
    
for(let x of user){
    let user_name_ver=x.name;
    let user_password_ver=x.password;
    if(user_name_input==user_name_ver && user_password_input==user_password_ver){
        alert(user_name_input+"_verfied")
       nouser=false;

        break;
    }else{
        nouser=true;
    }
}
if(nouser){
    alert("nouser_please sign in")
}


})

