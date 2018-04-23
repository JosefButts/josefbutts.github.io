//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var objectValues = [];
    for (var key in object) {
        objectValues.push(object[key]);
    }
    return objectValues;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var objectKeyString = "";
    for (var key in object) {
        objectKeyString += key + " ";
    }
    objectKeyString = objectKeyString.trim(); //
    return objectKeyString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var objectValueString = "";
    for (var key in object) {
        if (typeof object[key] === 'string') {
            objectValueString += object[key] + " ";
        }

    }
    objectValueString = objectValueString.trim();
    return objectValueString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
    else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let strArr = string.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        word = word[0].toUpperCase() + word.slice(1, word.length);
        strArr[i] = word.trim();
    }
    return strArr.join(" ");


}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let welcome = 'Welcome ' + capitalizeWord(object.name) + "!";
    return welcome;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe noiseObj /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    let noiseObj = object.noises;
    // let type = typeof noiseObj;
    if (Array.isArray(noiseObj) && noiseObj.length > 0) {

        return valuesToString(noiseObj);

    }
    else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let stringNew = string.split(" ");
    let wordPresent = false;
    for (let i = 0; i < stringNew.length; i++) {
        if (stringNew[i] === word) {
            wordPresent = true;
        }

    }
    return wordPresent;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    let friends = object.friends;

    if (!object.friends || object.friends.length < 1) {
        return false;
    }

    for (let i = 0; i < friends.length; i++) {
        if (friends[i] === name) {
            return true;
        }

    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

    let allPeople = []; // all names the data object
    let nonFriendArr = array;
    let nameFriends = [];

    for (let i = 0; i < array.length; i++) {
        //make a list of all names in the data object
        //except name argument
        if (array[i].name !== name && array[i].friends.includes(name) === false) {
            allPeople.push(array[i].name);
        }
        console.log(allPeople);
    }
    return allPeople;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for (let i = 0; i < array.length; i++) {
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {


    let sortedNewArray = array.sort();

    for (let i = 0; i < sortedNewArray.length; i++) {
        while (sortedNewArray[i] === sortedNewArray[i + 1]) {
            sortedNewArray.splice(i, 1);
        }
    }

    return sortedNewArray;



}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
