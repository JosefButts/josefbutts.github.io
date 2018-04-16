/*

FUNCTIONS:
        Functions are blocks of code (subprograms) that can be reused. They can 
        be called by external code, or, by internal code (recursion).
        Values can be (optionally) passed into the function and values are returned from
        functions.
        Functions are first class objects because they have properties but are different 
        from other objects because functions can be called (invoked)
        
FUNCTIONS are first declared and named using the following syntax:  (function statements   */

function exampleFunction() {
    return "This is the value entered from the function";
}

function exampleFunctionTwo(paramter) { //a function can have up to 255 arguments!!!!
    console.log(parameter + " is the parameter entered into the function");

}
// FUNCTIONS can also be anonymously declared, as in this FUNCTION EXPRESSION
// below which assigns the function to a variable

let dogYearConverter = function(humanAge) {
    return humanAge * 7;
}
// NAMED FUNCTION EXPRESSION:
let dogYearConverterNew = function dogYears(humanAge) {
    return humanAge * 7;
}

// !! ONE OF THE BENEFITS OF HAVE A FUNCTION NAMED INSIDE A FUNCTION EXPRESSION
// IS THAT IF THERE IS AN ERROR THE STACL TRACE WILL RETURN THE NAME OF THE FUNCTION 
// MAKING IT EASIER TO FIND THE ERROR


/* PARAMETERs are the values that a function is designed to accept, 
ARGUMENTS are the values that are actually passed in when the function in invoked

In the following example 'humanAge' is the parameter and 10 is the argumet passed in :              */

function doggyYears(humanAge) { // parameter between parenthesis
    return humanAge * 7;
}

let answer = doggyYears(10); // 10 is argument
//answer = 70;

// when a function is run we do so by 'calling' or 'invoking' the function

doggyYears(10); // this is how we call or invoke the function


//FUNCTIONS can also be delcared using arrow functions as below. This is a 
//syntactically shorter way to declare functions:

let timesTen = (number) => { return number * 10; }


//OTHER NOTES: FUNCTIONS can see and modify variable from the global scope but
// the globale scope cannot access the function scope variables.

let globalVar = 0;

function scopeTest() {
    let functionVar = 123; //function variable
    globalVar = 1234; //globalVar now = 1234
}

functionVar = 2345; //will cause error, functionVar inaccessible from global scope


/* Primitive dataypes are passed into functions by copy, complex datatypes by
reference.*/
