const userText = document.querySelector("input");
const btn = document.querySelectorAll("button");
const outputDiv = document.querySelector("div");

btn[0].addEventListener("click", ()=>{
    var text = userText.value
    outputDiv.innerText=text
    userText.style.color="blue"
    outputDiv.style.color="blue"
})