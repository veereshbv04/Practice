
const btn = document.querySelector("button");

// var el = document.createElement("div");
// var text = document.createTextNode("GgGg");
// el.appendChild(text)
// btn.appendChild(el)

var url ="https://mystery-api.kushanksriraj.repl.co/get";

btn.addEventListener("click", ()=>{
    var mtext ;
    fetch(url)
    .then(response =>{
        if(response.status === 404){
            mtext="page not found"
        }else if(response.status === 401){
            mtext = "you are not looed in"
        }
    })


    var el = document.createElement("div");
    var text = document.createTextNode(mtext);
    el.appendChild(text)
    document.body.appendChild(el)


})

