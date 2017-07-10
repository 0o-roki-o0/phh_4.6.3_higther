function myHigherFunction (func) {
console.log('myFunction');
return outsideFunction
}

function outsideFunction () {
console.log('outsideFunction')
}

let returnValue = myHigherFunction();
returnValue();

