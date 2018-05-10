//first exercise
var x = '#';
for (var i = 0; i < 7; i++) {
    console.log(x);
    x = x + '#';
}



//fizzBuzzer

for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
}
//checkerboard

function buildBoard(size) {
    var checkerBoard = [];
    var board;

    for (var i = 0; i < size; i++) {
        var row = [];
        //create odd number rows
        if (i % 2 === 0) { // if i is odd start with " "
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    row.push(" ");
                }
                else {
                    row.push("#");
                }
            }
            row.push('\n');
            checkerBoard.push(row);
        }
        else {
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    row.push("#");
                }
                else {
                    row.push(" ");
                }
            }
            row.push('\n');
            checkerBoard.push(row);
        }
        board = checkerBoard.join("");
    }
    console.log(board);

}


buildBoard(8);

function min(number1, number2) {
    return number1 < number2 ? number1 : number2;
}

min(2, 1);


function isEven(number) {
    var current = number;

    function evenCheck(current) {
        if (current < 0) {
            current = Math.abs(current);
        }
        else if (current === 0) {
            return true;
        }
        else if (current === 1) {
            return false;
        }
        else {
            return evenCheck(current - 2);
        }

    }
    return evenCheck(number);
}

isEven(3101);


function countBs(string) {
    var beanCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            beanCount++;
        }
    }

    return beanCount;
}

countBs('BBBBBbba');

function countChar(string, char) {
    var charCount = 0;
    // var N = string.length-1;
    var modString = string;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charCount++;
        }
    }

    return charCount;
}

countChars('BBBBBbba', 'B');



function range(start, end, increment) {
    //if increment argument is present increment by that
    //amount, else increment by 1
    //if increment is negative convert to absolute value
    //for subtraction

    var incr = increment ? Math.abs(increment) : 1;
    let range = [];

    // if incrementer is positive value push values to the array
    //with increment as added value
    if (end > start) {
        for (let i = start; i < end + 1; i += incr) {
            range.push(i);
        }
        // return range;
    }
    else { //negative increment case execution
        for (let i = start; i > end - 1; i -= incr) {
            range.push(i);
        }
        //return range;
    }
    return range;

}

console.log(range(5, 2, -1));
console.log(range(1, 10));

function sum(array) {
    var answer = array.reduce(function(previousResult, value, seed) {
        return previousResult + value;
    });
    return answer;
}

var testArray = [2, 3];
console.log(sum(testArray));
console.log(sum(range(1, 10)));
var arrayTest = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(array) {
    var revArray = [];
    for (let i = array.length - 1; i > -1; i--) {
        revArray.push(array[i]);
    }
    return revArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let originalVal = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = originalVal;
    }
    return array;
}

console.log(reverseArrayInPlace(arrayTest));


function arrayToList(array) {
    var list = null;
    //  var workingObj = {};
    for (var i = array.length - 1; i > -1; i--) {
        list = { value: array[i], rest: list };
    }
    return list;

}

var arrayTest = [1, 2, 3, 4, 5];

console.log(arrayToList(arrayTest));
var testList = arrayToList(arrayTest);
console.log(testList);


function listToArray(list) {
    var returnArray = []
    for (let node = list; node; node = node.rest) {
        returnArray.push(node.value);
    }
    return returnArray;
}

console.log(listToArray(testList));

function deepEqual(object1, object2) {

    var object1Keys = Object.keys(object1);
    var object2Keys = Object.keys(object2);
    //console.log(object1Keys.length, object2Keys.length);
    if (object1 === object2) {
        return true;
    }
    if (object1Keys.length !== object2Keys.length) {
        return false; // returns false if objects have different # of keys
    }

    if (typeof object1 !== "object" || object1 == null || typeof object2 !== "object" || object2 == null) {
        return false;
    }
    for (var key in object1) {
        if (!deepEqual(object1[key], object2[key])) {
            return false;
        }
    }




    //console.log(object1Keys);
    return true;

}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

/** Chapter 5 Eloquent Javascript exercises **/

//Flatten Arrays
let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

var mergedArray = arrays.reduce(function(previousResult, value, seed) {
    previousResult = previousResult.concat(value);
    return previousResult;

})

console.log(mergedArray);

//Higher order loop function

function loop(value, testFunct, updateFunct, body) {
    var value1 = value;
    while (testFunct(value1)) {
        body(value1);
        value1 = updateFunct(value1);

    }

};


loop(3, n => n > 0, n => n - 1, console.log);

//every function

function every(array, test) {

    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

//every function using some()

function every(array, test) {
    if (array.some()) {
        return false;
    }
}

//


//dominant direction hubub below here


function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            return script;
        }
    }
    return null;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        }
        else {
            counts[known].count++;
        }
    }
    return counts;
}
