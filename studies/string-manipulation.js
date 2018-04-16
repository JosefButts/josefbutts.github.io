/*
With operators
With string methods

*/

//Strings like other primitive values, are immutable but nevertheless have
//methods and properties available to them

//strings can be concatenated using the '+' 
let xyz = 'x' + 'y' + 'z'; // xyz = 'xyz'
// and also the concat method
let blah = 'blah';
console.log(xyz.concat(xyz)); // prints 'xyzblah'

// we can access the individual characters in a string usig index notation

console.log(xyz[1]); // prints 'y'

//toLowerCase his methods returns a string converted to all lowercase

let caps = 'WWWWW';
console.log(caps.toLowerCase()); /// prints 'wwwww'

//toUpperCase urns the string in all upper case
let lower = 'aaa';
console.log(lower.toUpperCase()); // prints 'AAA'

// The .length property returns the length of a given string. This returned value
//can be saved in a variable
let x = 'string';
let length = x.length
console.log(length); // prints 6

//indexOf() returns the index of the first occirence of a given value in  a strinf

let w = 'qwerty';
let z = w.indexOf('y');

// lastIndexOf() returns the index of the last occurrence of given value in a string

let wow = 'wowowow!!!owowowowo';
console.log(wow.lastIndexOf('o')); /// prints 18

// search() searches for a string of a specfied value and returns the position
//of the match

console.log(wow.search('!!!')); //prints 7

/*There are 3 ways to extract a portion of a string:

slice(start, end) extracts part of the string and returns a new string   */
let newString = wow.slice(1, 5);
console.log(newString); // prints 'owow'

//to return a new string starting from the end to the beginning use negavtive numbers
console.log(wow.slice(-12, -6)); //prints !!!owo

//substring is like slice but doesn't take negative indexes
console.log(wow.substring(4, 6)); // prints 'wo'

//substr() is similar to slice but accepts 2 parameters,
//the second specifying the length of the extracted string
console.log(wow.substring(2, 5)); //prints 'wowow'

//replace()
