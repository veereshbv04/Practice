var url = "https://jsonplaceholder.typicode.com/todos";

const outPutDiv = document.querySelector("div");


fetch(url)
.then((response) =>{
    console.log(response);
    
    return response.json()
})
.then((json) =>{
    console.log(typeof json);
    json.map((el)=>{
        if(!el.completed){
            console.log(el);
            outPutDiv.innerHTML +=  `<p class="not-true">${el.title} ${el.id} <br> <\p>`
        }else{
            console.log(el);
            outPutDiv.innerHTML +=  `<p>${el.title} ${el.id} <br> <\p>`
        }
        outPutDiv.innerHTML += `${el.completed}  <hr>`
    })
})
