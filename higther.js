function myHigherFunction (func) {
console.log('myFunction');
func();
}

function outsideFunction () {
console.log('outsideFunction')
}

myHigherFunction(outsideFunction);