var variable = "hello global variable"

function outerFunction(outerArg) {
    var outerVariable = "hello outer variable"

    function innerFunction(innerArg) {
        var innerVariable = "hello inner variable"

        console.log("Global Variable: ", variable);
        console.log("Outer Argument: ", outerArg);
        console.log("Outer Variable: ", outerVariable);
        console.log("Inner Argument: ", innerArg);
        console.log("Inner Variable: ", innerVariable);
    }

    innerFunction("hello inner argument")
}

outerFunction("hello outer argument")