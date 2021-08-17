const read = require("readline-sync");

var marks = []

function takeDetails(i){
  var n = Number(i) +1;
  console.log(" ");
  console.log("Enter the details of student " + n );
  var studentname = read.question("Enter name ");
  var unittest = read.question("Unit test marks ");
  var prefinal = read.question("Prefinal ");
  var finalmarks = read.question("Final Marks ");
  var totalmarks = Number(unittest) + Number(prefinal) + Number(finalmarks);
  var record ={name :studentname,
              u:unittest,
              p:prefinal,
              f:finalmarks,
              t:totalmarks
   }
  
  var totalmarks = Number(unittest) + Number(prefinal) + Number(finalmarks);
  marks.push(record);

}

for(let i=0; i<5; i++){
  takeDetails(i);
}

let max = 0;
console.log(marks);
for(let j =0; j<5; j++){
  var total = Number(marks[j].t);
  if(total >= max){
    max =total
    var student = marks[j].name;
  }
  
}

console.log(max);
console.log("Highest scorer is " + student);
