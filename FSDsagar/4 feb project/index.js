let quotes=[
    {
        text:"To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        text:"That it will never come again is what makes life so sweet.",
        author: " Emily Dickinson"
    },
    {
        text:"It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        text:"Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami"
    },
    {
        text:"Life is tough my darling, but so are you.",
        author: null
    },
    {
        text:"We are all broken, that's how the light gets in.",
        author: null
    },
    {
        text:"Don't let your happiness depend on something you may lose.",
        author: null
    },
    {
        text:"Be kind, for everyone you meet is fighting a hard battle.",
        author: null
    }
]
let quote=document.querySelector("h2")
let authorname=document.querySelector("p")
let but=document.querySelector("button")
let len=quotes.length
    
but=addEventListener("click",play)
function play(){
    
    let ramdom_number=Math.floor(Math.random()*len);
    
    
    let author=quotes[ramdom_number].author;

    let text=quotes[ramdom_number].text;
    if(author){
    authorname.innerText=author}
    else{
        authorname.innerText="someone";
    }
    quote.innerText=text;
}
