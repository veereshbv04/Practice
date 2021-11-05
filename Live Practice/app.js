const btn = document.querySelector("button");
const userImage = document.querySelector("img");
const repo = document.querySelector("div");

var url ="https://api.github.com/users/veereshbv04";

btn.addEventListener("click", ()=>{
    
    fetch(url)
    .then(function parse(response){
        console.log(response);
        return response.json();
    })
    .then(res=>{
        console.log(res);
        var aurl = res.avatar_url
        console.log(aurl);
        userImage.src=aurl
        var repourl = res.repos_url;
        console.log(repourl);
        fetch(repourl)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            res.map(obj =>{
                console.log(obj.name);
                repo.innerHTML+=`<h4>${obj.name}<h4>`;
            })
        })
    })

})