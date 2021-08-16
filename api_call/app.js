const inputText = document.querySelector("#input-text");
const btn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function constructURL(text){
    return serverURL + "?" + "text=" +text ;
}


function errorHandler(error){
    console.log(error);
}

function clickHandler(){
    
    console.log("hh");
    var userText = inputText.value;
    fetch(constructURL(userText))
    .then(function parse(response){
        console.log(response);
        return response.json()
    })
    .then(json =>{
        console.log(json);
        var textranslated = json.contents.translated;
        outputDiv.innerText = textranslated;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);