const user_name=document.querySelector("input[type='text']")
const user_password=document.querySelector("input[type='password']")
const btn=document.querySelector("input[type='submit']")
let new_data_name={}
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

btn.addEventListener("click",()=>{
      new_data_name.name=user_name.value;
      new_data_name.password=user_password.value;
    user.push(new_data_name);
    new_data_name={}
    user_name.value=""
    user_password.value=""
    


})

