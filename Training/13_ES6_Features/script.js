
// 1 ES5 function
function sum(a,b){
  let output = a+b;
  return output;
}


// 1 ES6 Arrow Function

// const sub = (a,b)=> a-b;


console.log(sum(2,3))





// 2 ES5 

// var name = "Suresh";

// var greeting = "Hello " + name + " " + "!";

// Hello Suresh !


// 2 ES6 Template Literals
var name = "Suresh";
var name2 = "ramesh"

// var greeting = `Hello ${name} ! ${name2}`;



let employeeNames = ["ramesh", "suresh"];


for(let i of employeeNames){
  var greeting = `Hello ${i} !`;
  console.log(greeting)
}




// 3 ES5

// let obj = {name: "suresh", secondName: "ramesh"}

// let name = obj.name;
// let secondName = obj.secondName;

// console.log(obj.name)

let arr = [2,4,6];

let x = arr[0];
let y = arr[1];
let z = arr[2]

console.log(x);
console.log(y);
console.log(z);




// 3 ES6 Destructuring Assignment

// let obj = {name: "suresh", secondName: 'ramesh'}

// let {name, secondName} = obj;

// console.log(name)
// console.log(secondName)


let arr = [2,4,6];

let [x,y,z] = arr;

console.log(x);
console.log(y);
console.log(z);




// 4 ES5

// let arrOne = [1,2,3];
// let arrTwo = [4,5,6];
// let arrThree = [7,8,9]


// arrOne = arrOne.concat(arrTwo).concat(arrThree);
// console.log(arrOne)
// console.log(arrTwo)






// 4 ES6 Spread Operator

// let arrOne = [1,2,3];
// let arrTwo = [4,5,6];
// let arrThree = [7,8,9]
// arrOne = [...arrTwo, ...arrOne, ...arrThree];
// console.log(arrOne);

let objOne = {name: 'suresh'};
let objTwo = {myName: 'Ramesh'};

let objThree = {...objOne, ...objTwo};
console.log(objThree)






// 5 ES5 var functional scope


// if(true){
//   var x = "suresh";
// }
// console.log(x)



// 5 ES6 let const  are block scope

// let x = "suresh" 
// const nameConst = "suresh" we cannot re assign

if(true){
  let name = "suresh"
  const dollerRate = 80.24;
  x = 10;
  console.log(x)
}