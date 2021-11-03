const name = document.querySelector("#name");
const password = document.querySelector("#password");
const outputDiv = document.querySelector("div");

password.onkeyup = ()=>{
    var uname = name.value ;
    var upassword = password.value

    if(upassword.includes(uname)){
        outputDiv.innerText="Password cannot contain name"
    }else{
        outputDiv.innerText="Password id is in correct format"
    }
}