// Javascript Conditions and Loops


// If
var countryName = "India";
var num = 10;
var y = 12;

if(countryName === 'India'){
  console.log("the country name india");
}


if(countryName === 'India' && num === 9){
  console.log("and the country name india ");
}

if(countryName === 'sfsdfdsfds' || num === 9 || y === 12){
  console.log("or the country name india ");
}





// If Else


var countryName = "USA";


if(countryName === 'AUSA'){
   console.log('if block USA');
}else{
  console.log('else block USA');
}



// If Else
var countryName = "India";

if(countryName === 'USA'){
   console.log('it is USA');
} else if(countryName === 'India'){
  console.log('it is india')
} else if(countryName === 'Japan'){
  console.log('it is Japan')
} 




// while loop
// for loop
// for In
// for Of
// do while


// While

// let age = 19;

// while(age > 18){
//   console.log(' he can watch movie')
// } 

// ABOVE PROGRAM CONTINOUSLY RUN

// print 0 to 100



// while

var i = 0;

while(i <= 100){
  console.log(i);
  i = i + 1;
}



// for Loop (use it for arrays)

for(var i = 0; i <= 30; i = i + 1){
  console.log(i);
}

var numberOfServer = 30;

for(var i = 0; i <= numberOfServer; i = i + 1){
  console.log(i);
}

var zipCodes= ['234567', '765567', '376567'];

// loop sequence
var i = 0 ( 1 step) exicute only once
i < zipCodes.length; (2 step) 
console.log(zipCodes[i]); (3 step)

i = i + 1 ( 4 step)
for(var i = 0; i < zipCodes.length; i = i + 1){
  console.log(zipCodes[i]);
}




var zipCodes= ['234567', '765567', '376567', '3245345'];

var zipLength = zipCodes.length;

for(var i = 0; i < zipLength; i++){
  console.log(zipCodes[i]);
}


// for of (use it for arrays)

var numbers = [1,2,3,4];

for( var i of numbers){
  console.log(i)
}





// for in ( to use for objects only)
var employee = {
  id: 2,
  address: 'chennai',
  no:3435,
  any: true
}

var x = {
   name: 'suresh',
  country: 'india'
}

console.log(employee.id)
console.log(employee['id'])

for ( var i in x){  
  console.log('this is key', i);
  console.log('this is value', x[i]);
}


