const nameDiv = document.querySelector("div");
const btn = document.querySelectorAll("button");
const apiOutput = document.querySelector("#apiOutput");

btn[0].addEventListener("click", ()=>{
    nameDiv.style.borderWidth = `5px`
})


btn[1].addEventListener("click", ()=>{
    nameDiv.style.borderWidth = `10px`
})

var url = "https://quick-access-api.desaihetav.repl.co"

btn[2].addEventListener("click", ()=>{
    fetch(url)
    .then(response => response.json())
    .then(res =>{
        apiOutput.innerHTML =`<p>${res.success} ${res.message}`
    })
})