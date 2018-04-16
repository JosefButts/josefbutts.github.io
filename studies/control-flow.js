/*If
Else-if
Else
Switch

*/
/* Control flow is order in which the computer executes code in a script. The program executes line by line
until it encounters structure that control and direct the flow which include conditionals and loops.
Loops are addressed in the attached loops section of this document.
 
Conditional Statements: Statements that are executed depending on the results of the conditions being
evaluated. Javascript has the if, if-else, else if, and switch conditionals.
 
if-else statements: a statement in which if the first condition 'if' is evaluated as true the 'if' code block executes.
If this first 'if' condition evaluates to false the computer then executes the 'else' statement if one is present. The condition
can be any condition that evaluates to true or false (boolean). */

if (12 === 12) {
    console.log("Twelve's It");
}
else {
    console.log('This will never happen!');
}
/*
 
if-else statements may be strung together or compounded using the else-if formula.
!! Only the first condition that evaluates to true will be executed, after which the 
remaining code in the conditional statement wil be skipped over.
*/

let a = 440;
if (a === 9) {
    console.log(9);
}
else if (a === 134) {
    console.log(134);
}
else if (a = 440) {
    console.log('You\'re in tune!');
}

/* The else statement provides a default bloack of code which will be executed 
should all the previous conditions evaluate to false. 

The following Values evaluate to false or are falsey:
-false
-undefined
-Nan
-Null
-0
-"" (empty string)


*/

if (a === 9) {
    console.log(9);
}
else if (a === 134) {
    console.log(134);
}
else if (a === 440) {
    console.log('You\'re in tune!');
}
else {
    console.log('I don\'t know what else to say about that number!');
}

/*
The switch conditional evaluats an expression and attempt to match the result
to one of the provided case values. If one of the case values matches the 
corresponding code block is executed
*/
let switchTest = 12345;
switch (switchTest) {
    case 123456:
        console.log("Terrible password");
        break;
    case 1234567:
        console.log("Too long of a number");
        break;
    case 12345:
        console.log("That's it");
        break;
    default:
        console.log('This is what happens if nothing matches the case');
}

https: //developer.mozilla.org/en-US/docs/Glossary/Control_flow

    -A control flow statement is one that one that execution results in a choice being
made over which of 2 or more paths to follow * /
