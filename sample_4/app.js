const inputText = document.querySelector("#input-text");
const button = document.querySelectorAll(".button");



button[0].addEventListener("click", ()=>{
    console.log("Red");
    inputText.style.color="red";
})


button[1].addEventListener("click", ()=>{
    console.log("Green");
    inputText.style.color= "green";
})



button[2].addEventListener("click", ()=>{
    console.log("Blue");
    inputText.style.color = "blue";
})