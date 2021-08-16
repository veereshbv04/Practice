const loadDiv = document.querySelector("#load-div");
const button = document.querySelector("#loaded");

button.addEventListener("click",()=>{
    console.log("Hello");
    loadDiv.style.display ="none";
})
