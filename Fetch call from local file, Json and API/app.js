const fileBtn = document.getElementById("fileGet");
const jsonBtn = document.getElementById("jsonGet");
const apiBtn = document.getElementById("apiGet");
const outputDiv = document.querySelectorAll(".outputDiv");


fileBtn.addEventListener("click", () => {
    outputDiv[0].innerHTML = `` 
    fetch("sample.txt")
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            outputDiv[0].innerHTML = data;
        })
})


jsonBtn.addEventListener("click", () => {
    outputDiv[0].innerHTML = `` 
    fetch("sample.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.map(item => {
                
                outputDiv[0].innerHTML += `<ul class="jsonOutput">
            <h2>${item.name}</h2>
            <li>${item.username}</li>
            <li>${item.email}</li>
            <li>${item.phone}</li>
            <li>${item.website}</li>
            <li>${item.company.name}</li>
            </ul>`

            })
        })
})


apiBtn.addEventListener("click", () => {
    outputDiv[0].innerHTML = `` 
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {

            data.map(item => {
                console.log(item.title);
                outputDiv[0].innerHTML += `<div class="apiOutput">
                <ul style="list-style: none;">
                <li>${item.userId}</li>
                <li>${item.id}</li>
                <li>${item.title}</li>
                <div>${item.body}<div>
                </ul>
                </div>`
                
            })

        })
})