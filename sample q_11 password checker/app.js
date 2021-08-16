const userPassword = document.querySelector("#user-password");
const button = document.querySelector("#submit");
const outputDiv = document.querySelector("#output-div");



userPassword.onkeyup = ()=>{
    
    console.log("Hello");
    var password = userPassword.value;
    console.log(password.length);
    if(password.length < 10){
        outputDiv.innerText = "Pasword must be 10 characters long"
        userPassword.style.color="red";
        button.style.backgroundColor="red"; 
    }else{
        outputDiv.innerText = "Password is valid"
        userPassword.style.color ="green";
        button.style.backgroundColor="green"; 
    }


}

// userPassword.addEventListener("onkeyup", ()=>{
//     console.log("Hello");
//     var password = userPassword.value;
//     if(password.length < 10){
//         outputDiv.innerText = "Pasword must be 10 characters long"
//     }


// })
