

function calc(){
  console.log('calc');
  const firstVal = document.getElementById('firstValue').value;
  const secondVal = document.getElementById('secondValue').value
  const val = document.getElementById('operationType').value;


  if(val == 'Sum'){
    document.getElementById('output').innerHTML 
                = parseInt(firstVal) + parseInt(secondVal);
                document.getElementById('output').style.color = 'red'
  } else if(arth == 'Sub'){

  } else if(arth == 'Mul'){
    
  }

 
}



