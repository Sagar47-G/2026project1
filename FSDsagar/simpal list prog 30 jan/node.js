const input=document.querySelector("input")
const button=document.querySelector(".add")
 const content=document.querySelector("ul")


button.addEventListener("click",()=>{
let task=input.value;
let node=document.createElement("li");
let nodetext=document.createTextNode(task);
node.appendChild(nodetext);
content.appendChild(node);
input.value="";
})


