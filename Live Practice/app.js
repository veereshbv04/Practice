const currentPrice = document.querySelector("#current-price");
const costPrice = document.querySelector("#cost-price");
const btn = document.querySelector("button");
const outputDiv = document.querySelector("div");

btn.addEventListener("click", ()=>{
    var current = Number(currentPrice.value);
    var cp = Number(costPrice.value);
    
    if(current < cp){
        outputDiv.innerText = `Loss is ${current- cp}`;
    }else{
        outputDiv.innerText = `Profit is ${current-cp}`;
    }
})