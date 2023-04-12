// 1. ASynchrnous javascript.


let x = 10; // statement 1
setTimeout(()=> {
    console.log('timeout with 5 seconds')
}, 5000)
let obj = {name: 'x'}; // statement 3













// 2.asynchrnous with api call and settimeout



let x = 10; // statement 1
console.log(x)




let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
console.log(httpRequest.responseText)
httpRequest.send();

httpRequest.onload = function(){
  if(httpRequest.status == 200 ){
     // console.log('success', JSON.parse(httpRequest.responseText))
     let data = JSON.parse(httpRequest.responseText);
    console.log(data)
  } else {
     console.log('failure')
  }
}



// statement 2
setTimeout(() => {
    console.log('timeout with 5 seconds')
}, 5000) 


let obj = {name: 'object value x'}; // statement 3
console.log(obj.name)




// 10
// object value x

// after 5 seconds
// timeout with 5 seconds


// callback functions
// promises
// async await

// 3. Callback Functions
function myFunctionOne(){
    console.log('calling my function one');
  }
  
function myFunctionTwo(){
console.log('calling my function Two');
}
  
  
  
function callAfter5Seconds(callBackTestFun){
    setTimeout(()=> {
        callBackTestFun();
    },5000);
}
  
  
   callAfter5Seconds(myFunctionTwo);
  
  console.log('print x')












  // Promises



 let promise = new Promise((resolve, reject)=> {
    
  // asynchrnous operation
    fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json())
    .then(res => {
      resolve(res)
    })

    // setTimeout
    setTimeout(() => {
      resolve('logged')
    }, 5000)



 })





 // promise example 2

 let p = new Promise(function(resolve, reject){

  // asynchrnous operation
  let amountGiven = 1000;

  if (amountGiven < 2000) {
    resolve('he has given money success')
  } else {
    reject(' he did not give 2000')
  }


})


console.log(p.status)

p.then(resolvedVal => {
  console.log('inside then', resolvedVal)
}).catch(err => {
  console.log('inside catch', err)
})





 // settled
 // pending
 // unsettled



 // ASYNC AWAIT

 async function test(){
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   console.log(response);
   const res = await response.json();
   console.log(res)
 }

 test()

