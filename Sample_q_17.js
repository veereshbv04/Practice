// Create a CLI app which would detect fake news. This app will take news as input and then source.
// If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

const read = require("readline-sync");
var news = read.question("Enter the news ");
var source = read.question("Enter the source ");

if(source === "facebook" || source === "whatsapp" || source === "telegram"){
  console.log("Don't believe things on FB and Whatsapp or telegram");
}else{
  console.log("You may believe this");
}
