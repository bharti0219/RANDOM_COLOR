let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let p=document.querySelector("p");
    let color= getRandomColor();
    p.innerText= color;
    let div= document.querySelector("div");
    div.style.backgroundColor=color;
});
function getRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
   
   let color= `rgb(${red}, ${green}, ${blue})`;
   return color;
}