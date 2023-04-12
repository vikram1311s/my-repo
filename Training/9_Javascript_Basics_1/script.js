//  execution of javascript 
// console.log('abc')  // synchrnous

// setTimeout(() => {   // asynchronus
//     console.log('run after 1 second')
// }, 1000)

// console.log('xyz')  // synchronus



//=============== Variable creation  ==//


// case sensitive  
// firstValue is not the same as FirstValue
// it should include letters, numbers, _, $
// it should not have reserver words like ex: finally
// it should not start with number

// var numOne = 30;  valid
// var $numOne = 20; valid
// var _num_one = 22;
// var @numOne = 33; // invalid include @
// var numOne%3 = 34; 
// var 4numOne = 55; // invalid starts with number



//=============== Dynamic Typing  ======= //

// primitive data types
var clientId =  10; // number
var name = "india"; // string
var canShowDiv = true; // boolean
var x = null // null
var y = undefined // undefined


// Reference data types
var obj;
var arr;

// ex key - name, value - 'first emp'
var employee = {
    name : 'first emp',
    number: 10,
    id: 234,
    xyzid: 43545,
    isShow: true,
    properties: ['prop 1', 'prop 2'], 
    address: {
      streetName: 'test',
      pincode:555555,    
      details: {
        x: 1
      }
    }
  }
  
  var schools = [
    'abc school', // 0
    'xyz school', // 1
    20, // 2
    {
      name: 'array school' // 3
    },
    [2,3] // 4
  ]
  
  


//=====

var a = 10;
var b = a;
b = 30;
a = 20;

// console.log('a value', a);
// console.log('b value', b);


var objOne = { name: 'Object One'}
var objTwo = objOne;
var objThree = objTwo;

objOne.name = "new Obj One";

objThree.name = "new Obj Three";
objThree.no = 123;


console.log('objOne value', objOne);
console.log('objTwo value', objTwo);
console.log('objThree value', objThree)

// objOne value {name: 'new Obj Three', no: 123}
// runner-4.1.8.min.js:1 objTwo value {name: 'new Obj Three', no: 123}
// runner-4.1.8.min.js:1 objThree value {name: 'new Obj Three', no: 123}




var a = [1,2];
var b = a;
var x = b;
a[0] = 4;
a.push(5);
b.push(222)
var c = b;
c.push(666)

console.log('array a', a);
console.log('array b', b);
console.log('array c', c);

// 


// array a (5) [4, 2, 5, 222, 666]
// runner-4.1.8.min.js:1 array b (5) [4, 2, 5, 222, 666]
// runner-4.1.8.min.js:1 array c (5) [4, 2, 5, 222, 666]


// 0 - 12, 1 - 5, 2 -9, 3 - 3 
var arr = [5,9,3];


arr.unshift(12); // push from first index
arr.shift()  // remove first element in arr
arr.push(5) // push value form start index
arr.pop() // remove value from last index


console.log(arr)



let employee = {
  name: 'suresh',
  id:2,
  loggedIn: true,
  elgibleForHike: null,
  incentives: undefined,
  awards: [2012, 2016, 2018],
  address: {
    streetName: 'xyz street',
    pincode: 520400
  },
  displayName: function(){
    console.log('show name')
  }
}

let employees = [
  [1,2,3],
  {
  name: 'suresh',
  id:2,
  loggedIn: true,
  elgibleForHike: null,
  incentives: undefined,
  awards: [2012, 2016, 2018],
  address: {
    streetName: 'xyz street',
    pincode: 520400
  },
  displayName: function(){
    console.log('show name')
  }
},
  {
  name: 'ramesh',
  id:2,
  loggedIn: true,
  elgibleForHike: null,
  incentives: undefined,
  awards: [2013, 2016, 2018],
  address: {
    streetName: 'xyz street',
    pincode: 520400
  },
  displayName: function(){
    console.log('show name')
  }
}
]

console.log(employees[2].awards[1])
console.log(employees[2].address.pincode)




let arr = [1, "name", true, {x: 1},null, undefined,[2,3]]

// access true
console.log(arr[2]);


// addition
function sum(valueOne, valueTwo){
  let output = valueOne + valueTwo;
  return output
}

// subtraction
function sub(valueOne, valueTwo){
  let output = valueOne - valueTwo;
  return output
}





let a = 10;
let b = 20;
let sumOfAB = sum(a,  b);
let subOfAB = sub(a,  b);



console.log('sumOfAB', sumOfAB)
console.log('subOfAB', subOfAB)




// function as parameter

function One(myFunction){
  myFunction();  
}


function Two(){
  console.log('suresh')
}

One(Two)



// after return function wont exicute

function getName(){
  console.log('before return');
  return "Suresh"; 
  console.log('after return wont show');
}

let nameOfEmployee = getName();



console.log(nameOfEmployee)


// creating object with method and calling it
let employee = {
  name: 'suresh',
  showSomething: function(x){
    console.log(x)
  }
}

employee.showSomething('sfdsdf');


// Array map method

let prices =  [200, 150, 240, 450, 670];

prices.push(700);


prices = prices.map(function(x, i){
  x = x + 40; 
  return  x;   
})


 console.log('prices final',prices)




//  let prices =  [200, 800, 700, 600];

// prices.pop(); // delete from last index
// prices.shift(); // delete from first index
// prices.push(123) // add element from last index
// prices.unshift(333); // add element from first index


console.log(prices);


let x = "suResh";

let y = 'Ramesh';

// charAt is string method
let y  = x.charAt(5);

console.log(x);

console.log(y.charAt(3))




// Reference javascript objects
// /https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array