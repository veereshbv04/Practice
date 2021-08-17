// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.

object1={
  name:"Ram",
  age:2500,
  power:1200
}

object2={
  name:"Krishna",
  age:2325,
  power :2400000
}

function morePower(object1, object2){
  if(object1.power > object2.power){
    console.log(object1.name);
  }
  if(object2.power > object1.power){
    console.log(object2.name);
  }
  if(object1.power === object2.power){
    console.log("Both are havin Equal Power");
  }
}

morePower(object1, object2);
