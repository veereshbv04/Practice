const inputText = document.querySelector("#input-text");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const outputDiv = document.querySelector("#output-div");



h1.addEventListener("click", ()=>{
    
    var userText = inputText.value; 
    console.log(userText);
    console.log("h1");
    outputDiv.innerHTML = `<div><h1>${userText}</h1></div>`
})

h2.addEventListener("click", ()=>{
    var userText = inputText.value;
    console.log("h2");
    outputDiv.innerHTML = `<div><h2>${userText}</h2></div>`
})


h3.addEventListener("click", ()=>{
    var userText = inputText.value;
    console.log("h3");
    outputDiv.innerHTML = `<div><h3>${userText}</h3></div>`
})