function validate(){
  var username = document.getElementById('userId').value;
  var pwd = document.getElementById('passwordId').value;
  console.log('zzz username', username);
  console.log('zzz password', pwd);
  if(username === 'suresh' && pwd === 'abc'){
    alert('username and password are valid')
    // api call send data to server
  } else {
    alert('username and password are invalid')
  }
}

// Adding event listener on click on button Id

document.getElementById('buttonId')
.addEventListener('click', validate)




// document select elements

var firstId = document.getElementById('idOne')
var classOne = document.getElementsByClassName('clsOne')
var tags = document.getElementsByTagName('div')
var firstIdByQuery = document.querySelector('#idOne')
var classesByQuery = document.querySelector('.clsOne')


var inputColor = document.getElementById('inputColor');

// access input color
inputColor.value
