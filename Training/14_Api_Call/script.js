// Api calls from client to server

// 1. Core javascript - XMLHttpRequest

let httpRequest = new XMLHttpRequest();

//httpRequest.onreadystatechange

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
console.log(httpRequest.responseText)
httpRequest.send();

httpRequest.onload = function(){
  if(httpRequest.status == 200 ){
     // console.log('success', JSON.parse(httpRequest.responseText))
     let data = JSON.parse(httpRequest.responseText);
    for(i of data){
      console.log(i.userId)
    }
     
  } else {
     console.log('failure')
  }
}






// 2. core javascript
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json()).then(data => {
  for(i of data){
    console.log(i.userId)
  }
})



// remove the reference of object

let obj1 = {name: 'test'};



let obj2 = JSON.parse(JSON.stringify(obj1));


obj2.name = 'my own string'

console.log(obj2.name)