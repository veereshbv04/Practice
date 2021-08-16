const firstNum =document.querySelector("#first-input");
const secondNum  = document.querySelector("#second-input");
const buttons = document.querySelectorAll(".operation");
const outputDiv = document.querySelector("#output-div");



buttons[0].addEventListener("click", ()=>{
    var n1 = Number(firstNum.value);
    var n2 = Number(secondNum.value);
    outputDiv.innerText = n1 + n2
})

buttons[1].addEventListener("click", ()=>{
    var n1 = Number(firstNum.value);
    var n2 = Number(secondNum.value);
    outputDiv.innerText = n1 - n2
})

buttons[2].addEventListener("click", ()=>{
    var n1 = Number(firstNum.value);
    var n2 = Number(secondNum.value);
    outputDiv.innerText = n1 * n2
})

buttons[3].addEventListener("click", ()=>{
    var n1 = Number(firstNum.value);
    var n2 = Number(secondNum.value);
    outputDiv.innerText = n1 / n2
})