function LongestWord(sen) {

    // code goes here  
    var wordArray = sen.split(" ");
    var cleanedArray = [];
    var longestWord = "";

    wordArray.forEach(function(element) {
        cleanedArray.push(element.replace(/[^a-zA-Z0-9+]+/g, ''));
    });



    cleanedArray.forEach(function(element) {

        if (element.length > longestWord.length) {
            longestWord = element;
        }
    });


    return longestWord;

}

// keep this function call here 
//LongestWord(readline());


function LetterChanges(str) {
    var newStr = str.toLowerCase().split('');
    console.log(newStr);
    var alphaArray = ('qwertyuiopasdfghjklzxcvbnm').split('').sort();
    var letters = /^[A-Za-z]+$/;
    var vowels = /^[aeiou]+$/i;
    var modifiedArray = newStr.map(function(element, index, newStr) {




        if (element.match(letters) && (element !== 'z')) {
            var transposedIndex = alphaArray.indexOf(element) + 1;
            return alphaArray[transposedIndex];
        }
        else if (element === 'z') {
            return 'a';
            // modifiedArray.push('a');
        }
        else {
            // modifiedArray.push(element);
            return element;
        }
    });
    modifiedArray.forEach(function(element, index, collection) {
        if (element.match(vowels)) {
            collection[index] = element.toUpperCase();
        }
    });
    return modifiedArray.join('');


}

// keep this function call here 
//LetterChanges(readline());

function SimpleAdding(num) {
    var sum = 0;
    for (var i = 1; i < num + 1; i++) {
        sum += i;
    }
    // code goes here  
    return sum;

}

// keep this function call here 
//SimpleAdding(readline());

function LetterCapitalize(str) {
    var newArray = str.split(" ").map(function(element, index, array) {
        return element[0].toUpperCase() + element.slice(1);
    });
    // code goes here  
    return newArray.join(" ");

}

// keep this function call here 
//LetterCapitalize(readline());




function SimpleSymbols(str) {

    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str) || /[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }
    return true;
}
// keep this function call here 


// keep this function call here 
//SimpleSymbols(readline());

function CheckNums(num1, num2) {

    // code goes here  
    return num1 < num2 ? true : false;

}

// keep this function call here 
//CheckNums(readline());

function TimeConvert(num) {
    var hours = Math.floor(num / 60);
    var mins = num % 60;
    // code goes here  
    return hours + ":" + mins;

}

// keep this function call here 
//TimeConvert(readline());

function AlphabetSoup(str) {


    // code goes here  
    return str.toLowerCase().split("").sort().join("");

}

// keep this function call here 
//AlphabetSoup(readline());
