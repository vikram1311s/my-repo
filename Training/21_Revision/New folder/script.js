
// primitive
var name = "John";  // string
var age = 25; // number
var isMarried = false; // boolean
var job; // undefined
var job = null; // null#

var name = 10;
var x = name;
x = 20;



// reference types
var person = { name: 'suresh', age: 10}
var person2 = person
person2.name = 'ramesh'


var numbers = [1,2,4,5,7];
console.log(numbers[0]);

let numbers = [1, 2, 3, 4, 5, 6]

let arrOfObjects = [{
    name: 'suresh',
    age: 64
  },
  {
    name: 'ramesh',
    age: 34
  }
]

arrOfObjects = arrOfObjects.map((person) => {
  if(person.age > 60){
    person.seniorCitizen = true;
  } else {
    person.seniorCitizen = false;
  }
  return person;
})

console.log(arrOfObjects)

function printName(name){

    return 'Hi '+ name
 }
 
 let x = printName('test')
 
 console.log(x)

 fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
            


  var x  = 10;

  setTimeout(() => {
     console.log('test')
  }, 1000);

  console.log(x)


  var x  = 10;

   fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

  console.log(x)






