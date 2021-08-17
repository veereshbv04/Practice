// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

object1={
  name:"Ram",
  age:25,
  yuga:"Treta"
}

object2={
  name:"Krishnna",
  age:31,
  yuga:"Dwapar"
}


function moreAge(object1, object2){
  if(object1.age>object2.age){
    return object1.name
  }
  if(object2.age>object1.age){
    return object2.name
  }
  return "Both are of same age"
}

console.log(moreAge(object1, object2));
