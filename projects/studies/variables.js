/*Test*/

/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
As mentioned earlier, the variable statememt declares a variable and declared variable can
be initilaized (assigned a value)at this time if it is desired. A few things to remember:

1. Variable declarations (but not assignments-see hoisting) are processed before any code is executed. 
*/
console.log(name); //undefined since var name is processed (hoisted) before this code is executed
// but assignment name = 'Joe' is not executed until te code reaches the assignment statement.
var name = 'Joe'; //declaration


/*    
2. The variable's scope is determined by it's execution context-which could be inside an enclosing function or 
        in the global scope */
var name = 'Joe'; // This Variable is in the global scope   

function myName() {
    let name = 'Joe'; //This variable is in the function scope and inaccessible from outside the function
    return name // It is a 'local' variable and wil be destroyed after the function returns
}
/*
3. Redeclaring a variable will not cause it to lose it's current value
*/
var name = 'Joe'; // redeclaring this will not change or reset the assignment from 'Joe';

/*
4. Undeclared variables are always globaland  don't exist until the code assigning them is executed
    -declared variable are created before any code is executed
*/

function eat() {
    eaten = true; //this variable is undeclared in either the global or local scope and
    // will not be processed until the function executes;
}

/*    
    5. (Theoretically, according to MDN network) Declared variables are "nonconfigurable pporperty of their execution context" ie they can't be deleted
        -undeclared variabls are configurable-can be deleted ???
*/
// var color = 'red'; //declared and assigned
// var shape = 'triangle'; //undeclared assignment

// delete this.color; //suppossed to render typeerror
// delete this.shape;

//console.log(color, shape);  //suppossed to print = 'red' followed by 'undefined'. Didn't do this in my console!!!

// var, let, const
/* There three distinctions when declaring a variable
The 'let' statement allows you to declare a block scope variable. 'let' doesn't hoist
*/
let weather = 'sunny';
let cloudy = true;
if (cloudy === true) {
    let weather = 'cloudy';
    console.log(weather); // logs 'cloudy'
}
console.log(weather); // logs 'sunny'
/*
Const is used to declare a variable which is block scoped and cannot be reassigned or redeclared
*/

const planetShape = 'sphere';
//planetShape = 'flat'; //"TypeError: Assignment to constant variable.

/*Var 
Var is used to declare a variable and its scope is the scope of teh current execution context. Var s hoisted and cand
be redeclared
*/
var x = "the letter x";


/* Hoisting,  mentioned above, is caused by the fact that variable declaritions and processed before any
code is executed. This causes the variable to be declared though the assignments are not hoisted, and do not execute until the their code executes

*/

console.log(x); //undefined though the variable exists and was hoisted above this code
var x = 123; //
console.log(x); // logs 123 


/* Closure: Closure is cause by using functions which 'enclose' variables from outer functions, effectively
utilizing information from scopes that don't exist after the return of teh outer functions
Closure's have acces to three scopes: 1. the outer function's scope, 2. The function's scope, and 3. The global scope

Closures are functions which return functions

A fancier of way of saying this, via mdn is "A closure is the combination of a function and the lexical environment 
within which that function was declared." Very fancy indeed!

Closures can be utilized to make private variables which are not accesible from outside the function

*/

function openSesame(passCode) {

    let secretCode = 234;

    return function(passCode) {
        if (passCode === secretCode) {
            return true;
        }
        else return false;
    };

}

let enter = openSesame();

console.log(enter(234)); //returns true, code matches

//console.log(secretCode); // "ReferenceError: secretCode is not defined
