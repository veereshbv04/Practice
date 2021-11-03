const btn = document.querySelectorAll("button");
const outputDiv = document.querySelector("div");

var url = "https://mock-practice.prakhar10v.repl.co/bollywood?name="

btn[0].addEventListener("click", ()=>{

    var name = btn[0].innerText
    fetch(url + name )
    .then(response => response.json())
    .then( res =>{
        outputDiv.innerText=res.message
    })
})


btn[1].addEventListener("click", ()=>{

    var name = btn[1].innerText
    fetch(url + name )
    .then(response => response.json())
    .then( res =>{
        outputDiv.innerText=res.message
    })
})