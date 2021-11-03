const name = document.querySelector("#name");
const call = document.querySelector("#fetch");
const showotp = document.querySelector("#showotp");
const userOtp = document.querySelector("#user-otp");
const checkOtp = document.querySelector("#check-otp");
const validateOtp = document.querySelector("#validate");

var otp;
var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

call.addEventListener("click", ()=>{
    fetch(url + name.value)
    .then(response => response.json())
    .then(res =>{
        otp = res.otp;
        showotp.innerText = otp;
        console.log(otp)
    })
})

checkOtp.addEventListener("click", ()=>{
    var uOtp = userOtp.value;
    if(uOtp === otp){
        validateOtp.innerHTML = `<p class="success">Success</p>`
    }else{
        validateOtp.innerHTML = `<p class="failure">Failure</p>`
    }
})