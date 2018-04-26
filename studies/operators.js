/*Assignment
Arithmetic
Comparison
Logical
unary (!, typeOf, -)
Turnary (a ? b : c)
*/

/* Javascript has unary, binay and (1) ternary operator.
Assignment operators:
*/

//'=' assigns the lefthand value to the right hand variable. 

let variable = 'Look here!';

//+= assigns the left hand side variable the value of itself plus the right hand number
var num = 1;
num += 5; //num = 6
//-= assigns the right hand side variable the value of itself minus the left hand numbe
//and assigns the value to variable
num -= 1; // num = 5
//*= assigns the left hand variabel the value of the variable multiplied
//by the righthand value
num *= 5; //num = 25
// /= assigns the lefthand variable the value of the variable divided by the righthand
//value
num /= 5; //num = 5


/*comparison operators compare two valuesoperands and returns a boolean value.
 */
//Equal (==)
12 == '12'; // evaluates to true
//Strict Equal (===)
12 === '12'; //evaluates to false
//NOt equal (!=)
5 != 6; // evaluates to true
//Strict not equal (!==)
5 !== '5'; // evaluates to true
//Greater than (>)
5 > 2; // evaluates to true
//Less than (<)
3 < 1; //evaluates to false
//Greater than or equal to (>=)
12 >= 12; //// evaluates to true
//Less than or equal to (<=)
234 <= 400; //// evaluates to true

//Arimetic operators take two operands and return a numberical value*/

let x = 1 + 1; //addition
let y = 1 - 1; // subtraction
let z = 1 / 1; //division
let a = 1 * 2; // multiplication
let b = 10 % 5; // mod returns a remainder from division by te 2 operands
b++; //incremento, adds 1
b--; // decrement, adds 2


//Logical operators: && and ||, typically used wih boolean values and return a boolean when they are
// The can be used with non-booelan values and return a non-bolean value if so//ex:

13 === 13 && 12 === 12; // returns true

13 == 13 || 12 == 12; // returns true 


// Unary (!, typeOf, -) these operators take one value
//typeof returns the typeof data given
let answer = typeof true;
console.log(answer);

//bang makes the statement the opposite of what it normally returns
var trueFalse = !true; //false 
//


// Turnary (a ? b : c) these operators take 3 values, first a condition to be 
// evaluated separated by a question mark from two values, the first value will 
//return is a is true, the second if a is false

(50 < 120) ? 'This is true' : 'This is not true'; //returns 'This is true'
(50 === 120) ? 'This is true' : 'This is not true' // returns 'This is not true'
