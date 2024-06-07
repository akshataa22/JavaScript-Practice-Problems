//global scope example

var global = 'global variable'

function globalAccessingVariable() {
    console.log(global)
}

globalAccessingVariable()
console.log(global)

console.log('--------------------------------')
//function scope example

function functionAccessingVariable() {
    var outerVariable = 'outer function variable'

    function innerFunction() {
        var innerVariable = "inner function variable";
        console.log(outerVariable)
        console.log(innerVariable)
    }

    innerFunction()
     // console.log(innerVariable); // Not accessible here (Uncommenting this line will cause an error)
}

functionAccessingVariable()

console.log('--------------------------------')
//block scope example

function blockScopeAccessingVariable() {
    if (true) {
        var functionScopedVar = "function scoped";
        let variable = "block scoped";
        const variable1 = "also block scoped";
        console.log(functionScopedVar); // Accessible here inside the block'{}'
        console.log(variable); // Accessible here inside the block'{}'
        console.log(variable1); // Accessible here inside the block'{}'
    }
    console.log(functionScopedVar); // Accessible here inside the function
    // console.log(variable); // Not accessible here (Uncommenting this line will cause an error)
    // console.log(variable1); // Not accessible here (Uncommenting this line will cause an error)
}

blockScopeAccessingVariable();
