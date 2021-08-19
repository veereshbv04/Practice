const inputText = document.querySelector("#input-text");
const btn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translated/navi.json";

function constructURL(text){
    return serverURL + "?" + "text=" +text ;
}

function errorHandler(error){
    
    console.log("In error");
    console.log(error);
 
}

function clickHandler(){
    
    console.log("Button Clicked");
    var userText = inputText.value;
    fetch(constructURL(userText))
    .then(function parse(response){

        if(response.status === 200){
            console.log("Response status code is 200");
        }
        console.log(response.status)

        console.log(response.url);
        console.log(response);
        return response.json()
    })
    .then(json =>{
        console.log(json);
        console.log(json.error)
        console.log(json.error.code);
        if(json.error.code === 404){
            outputDiv.innerText = json.error.message;
        }
        
        // var textranslated = json.contents.translatedd;
        // console.log(textranslated);
        // outputDiv.innerText = textranslated.toUpperCase();
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);