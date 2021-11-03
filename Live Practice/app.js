const userText = document.querySelector("input");
const btn = document.querySelector("button");
const outputDiv = document.querySelector("div");

btn.addEventListener("click", ()=>{
    if(userText.value.length <10){
        outputDiv.innerText="Password is less than 10 characters"
        
    }else{
        outputDiv.innerText="Success"
        
    }
})

userText.onkeyup = ()=>{
    if(userText.value.length >10){
        btn.disabled=false
    }
}