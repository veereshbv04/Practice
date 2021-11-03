const btn = document.querySelector("button");
const outputDiv = document.querySelector("div");

var url = "https://jsonplaceholder.typicode.com/todos";

btn.addEventListener("click", ()=>{

    fetch(url)
    .then(response => response.json())
    .then(res => res.map(obj =>{
        outputDiv.innerHTML+=`<p>${obj.title} <br> ${obj.completed}<\p>`
    }))
})