const userInput = document.querySelector("input");
const outputDiv = document.querySelector("div");

userInput.onkeyup = ()=>{
    if(userInput.value ==="Tanvi"){
        outputDiv.innerText="She is the best CEO ever!"
    }else if(userInput.value === "Tanay"){
        outputDiv.innerText = "He is our FUNNY mentor!"
    }else if( userInput.value === "Swapnil"){
        outputDiv.innerText = "He helps us CONQUER jobs!";
    }else if(userInput.value === "Akanksha"){
        outputDiv.innerText = "She is our CHEERFUL Interviewer!"
    }
}