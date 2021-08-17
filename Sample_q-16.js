// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.Write a function which takes two objects and return the person with more power based on their name and power both.

object1={
  name:"Ram",
  age:"Treta",
  power:2500
}

object2={
  name:"Krishna",
  age:"Dwapar",
  power :2325
}

function morePower(object1, object2){
  var n1l= object1.name.length
  var n2l = object2.name.length
  var power1= n1l * 35 + Number(object1.power);
  var power2= n2l * 35 + Number(object2.power);
  
  console.log("Ram Power " + power1);
  console.log("Krishna Power " + power2);


  if(power1>power2){
    console.log(object1.name);
  }
  else if (power2>power1){
    console.log(object2.name);
  }else{
    console.log("Both of them have same power");
  }

  
}

morePower(object1, object2)
