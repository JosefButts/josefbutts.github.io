/*Datatype review

In Javascript there are 6 primitive datatypes:
1. Number, 2. Boolean, 3. String, 4. null, 5. Undefined, 6. Symbol (ES6)

1. Number: Represents numbers ex: 1, 23, -234, etc, also includes inifinity, -infinity, and Nan- not a number
*/
var num = 234;
/*
2. String: represents textual data like 'dog' or 'sandbox' and is 0-indexed, length of a string is the numbre of elements in it
 In JS, strings are immutable (not so in some other languages). strings can be concatenated or you can creat new strings by 
 perfoming operations on a string
 */

let string = 'word';

/*
3. Boolean: reprents either true or false
*/
let myBool = true;

/*  
4. null has only one value which is null. It is used when an objects value is intentianlly left blank or unassigned
*/
let leftValeOffOnPurpose = null;
console.log(leftValeOffOnPurpose);

/*

5. undefined - a value assigned to values which are declared but not assigned

*/
let fact;
console.log(fact); //undefined

/*6. symbol- a type of primitive datatype which can be used to make properties anonymous

Nan - represents a value that is not a number

Complex Datatypes:

Array: an array is a complex data type that stores data in an indexed reference list.
    Any data type can be store into an array. 
    Arrays are stored into variable names and are technically objects with  specific set of methods that be called on them */
let myArray = [];
myArray = [1, 3, 56, 7, 8, 5];
var element = myArray[1]; // returns 3
console.log(element);
let myNewArrayy = [1, 'w', [1, 2, 3], { name: "Joe" }, function bob() { console.log("Bob's your uncle!") }];
console.log(myNewArrayy);

/*
Object:Complex datatype
      In JS, an object can be deseribed as a collection of properties.
      Objects can be intialized using obeject literal syntax and properties can be added or removed
      Objects store data using key value pairs, the key is how you access the data
 */
//declaring and assigning an object
let awesomeObject = {
    name: 'awesome',
    color: "blue",
    rank: 'supreme leader of the world'
};
//accesing a value using bracket notation
console.log(awesomeObject['name']);
//accessing a value using dot notation
console.log(awesomeObject.rank);
//adding a key value pair to the object using bracket notation
awesomeObject['dog owner'] = false;

//adding a key value pair to the object using dot notation
awesomeObject.dog_owner = false;
/*     
Function: a function is a block of code that can be reused multiple times.Functions can be designed to accept arguments and return values. Functions are created with the following syntax: 
*/
function testFunction(parameter1, parameter2) {
    let something = paramter1 + parameter2;
    return something;
}
/*
    functions can also be used to return other functions which is the basis for closures.
*/
function closureDemo(parameter1) {
    return function testFunction(parameter2) {
        let something = parameter1 + parameter2;
        return something;
    }
}

/*
Infinity and - Infinity(Google them
        if you don 't know!)
       

*/
/*  What is the difference between simple and complex data types ?
    Well, thanks for asking! 
         Simple data datypes are :
         1.atomic, meaning they contain no other datatypes (unlike an array or an objects)
         2. They are immutable, meaning they can't be changed. the numebr 1 can't be changed to anogther number
            The simple data type can some operation performed on it to produce another value,
            but that value must be then stored into another variale
        Complex data types are collections of properties
        1. Objects are the source of all complex data types. They containg multiple ket value pairs
            These values and keys can be altered, added to, deleted, etc
        2. An array is atype of object but desigend to store information in a numerically based, 0 indexed fashion.
