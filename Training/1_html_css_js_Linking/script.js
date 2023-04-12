
function showMyName(){
    console.log('showing my name')
}

function showTestId(){
     console.log('show test id')
}


const clickButton = document.getElementById('clickButton');
const testId = document.getElementById('testId');



// click button event
clickButton.addEventListener('click', showMyName);

// test id event
testId.addEventListener('click', showTestId);