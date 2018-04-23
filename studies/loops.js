/*
Loops provide a mechanism by which blocks of code may be executed multplie times
Types of loops : 
1. for loops
2. for-in loops
3. while loops


1. for loops, consists of a block of code designated to execute multiple times
depending on a condition. They execute until the condition to be evaluated returns 
false, at which point the code stops executing. for loops are made in the following way:
    A. An initializing expression is executed, typically initializing one or more loop counters
    B. A condition is evaluated, if the condition evaluates to true the code block executes,
    if false the loop terminates
    C. If present the loop increments according to the incrementation and the condition
    is evaluated again
    
    // for (initializtion; condition eval; increment) {
         code to execute
    }
    
    Infinite loops could occur in a for loop if the condition never becomes false
*/

for (let i = 0; i < 101; i++) {

    console.log(i); // will log 0 through 100
}

/*  for-in loops: this loops provdes a way to loop over the (enumerable) properties
of an object. For each property javascript executes the provided statements.
*/
let randomObject = {
    shoes: 'old',
    coffee: 'cold',
    beard: 'fluffy',
    duck: 'yellow'

}
//code below prints out the key and value of each property in randomObject
for (var key in randomObject) {
    console.log(key + " = " + randomObject[key]);
}

/*
While loops: execute a block of code as long as the condition evaluated returns true
Infinite loops will happen if you don't provide a way for the loop to evaluate to false.
*/

let i = 0;

while (i < 100) {
    console.log('Age is ' + i + ' Not too old yet!');
    i++;
}
/*
Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
Loop over an Array, forwards and backward
Loop over an Object, forwards and backwards(hint: 
*/

let keys = Object.keys(randomObject); // gets all the keys and returns as an array

console.log(keys); // logs the keys

keys.reverse(); //reverses the keys array

for (let i = 0; i < keys.length; i++) {
    console.log(randomObject[keys[i]]); //prints out the values for each key in the array
}
