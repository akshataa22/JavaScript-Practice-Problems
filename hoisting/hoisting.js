//variable hoisting

console.log(hoistedVar);  //undefined until initialized
var hoistedVar = "hoisted!";
console.log(hoistedVar);

console.log(variable); // ReferenceError: Cannot access 'letVar' before initialization
let variable = "hoisted but in Temporary dead zone!";
console.log(variable); // This line will not be executed due to the error above

console.log(variable1); // ReferenceError: Cannot access 'constVar' before initialization
const variable1 = "Also hoisted but in Temporary dead zone!";
console.log(variable1); // This line will not be executed due to the error above

console.log('-------------------------')
//function hoisting

hoistedFunction(); // Output: I'm a hoisted function!

function hoistedFunction() {
    console.log("I'm a hoisted function!");
}

//function expression and hoisting

console.log(hoistedFunctionExpression); // Output: undefined
hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

var hoistedFunctionExpression = function() {
    console.log("I'm a function expression!");
};

hoistedFunctionExpression(); // Output: I'm a function expression!
