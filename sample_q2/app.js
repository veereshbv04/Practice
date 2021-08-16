const inputText = document.querySelector("#input-text");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");




increase.addEventListener("click", (e)=>{
    let font =window.getComputedStyle(inputText, null).getPropertyValue('font-size');
    e.preventDefault();
    var changedFont = Number(font.replace("px",0)) + 2;
    console.log(changedFont);
    console.log(changedFont + "px")
    inputText.style.fontSize = changedFont + "px"
})


decrease.addEventListener("click", ()=>{
    let font = window.getComputedStyle(inputText, null).getPropertyValue('font-size');
    var changedFont = Number(font.replace('px',0)) - 2;
    inputText.style.fontSize = changedFont + "px";
})