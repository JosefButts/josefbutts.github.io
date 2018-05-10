// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-josefbutts');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var maleNumber = _.filter(array, function(element, i, array) {
        return array[i].gender === 'male';
    });
    return maleNumber.length;
};

var femaleCount = function(array) {


    return _.reduce(array, function(previousResult, currentValue, index) {
        if (currentValue.gender === 'female') {
            previousResult += 1;
        }
        return previousResult;
    }, 0);

};

var oldestCustomer = function(array) {
    var oldestCust = _.reduce(array, function(previousResult, element, index) {
        if (previousResult.age < element.age) {
            previousResult = element;
        }
        return previousResult;
    });
    return oldestCust.name;
};

var youngestCustomer = function(array) {
    var youngestCust = _.reduce(array, function(previousResult, element, index) {
        if (previousResult.age > element.age) {
            previousResult = element;
        }
        return previousResult;
    });
    return youngestCust.name;
};

var averageBalance = function(array) {
    // var seed = array[0].balance.replace('$', '');
    var totalFunds = _.reduce(array, function(previousResult, element, index) {
        var currentBalance = Number(element.balance.replace(/[$,]/g, ''));
        return previousResult += currentBalance;
    }, 0);

    var average = (totalFunds / array.length);
    average = Math.round(average * 1000) / 1000;
    console.log(average);
    return average;



};

var firstLetterCount = function(array, letter) {
    var letterCount = 0;

    _.each(array, function(element, index, array) {
        var name = element.name[0].toLowerCase();
        if (name === letter.toLowerCase()) {
            letterCount = letterCount + 1;
        }
    });
    return letterCount;
};

var friendFirstLetterCount = function(array, customer, letter) {

    var count;

    _.each(array, function(element, index, array) {
        //find the element of teh array that has a name that matches customer
        if (element.name === customer) {
            //if the name matches, search the friend list for names that start with <letter>
            var friends = element.friends;
            count = firstLetterCount(friends, letter);
        }
    });

    return count;
};

var friendsCount = function(array, name) {

    var friendsList = []; //an array to hold the list of friends
    _.each(array, function(element, index, array) { //iterate on the array of objects
        _.each(element.friends, function(value, key, collection) { //iterates thru array of 
            if (element.friends[key].name === name) {
                friendsList.push(element.name);
            }
        });
    });
    return _.unique(friendsList);
};


var topThreeTags = function(array) {
    var tagList = []; //list of all tag occurences
    var topTags = [];

    //creat an array of all tags
    _.each(array, function(element, index, array) { //iterate on the array of objects
        var tags = element.tags; //tags = this elements array of tags
        _.each(tags, function(element, index, array) { //iterates thru array of tags
            //pushes the tags to tagList array
            tagList.push(tags[index]);

        });
    });


    var tagObj = {}; //create an object to hold tags/counts
    //iterate over array and create keys/count occurences
    _.each(tagList, function(element, index, array) {
        tagObj[element] = tagObj[element] ? tagObj[element] + 1 : 1; //if no key is present create
    });

    //figure out the top three tags
    var greatest3 = [];

    _.each(tagObj, function(value, key, collection) {
        if (value > 2 && greatest3.length < 3) {
            greatest3.push(key);
        }
    });


    return greatest3;
};

var genderCount = function(array) {

    var genderArray = {
        male: 0,
        female: 0,
        transgender: 0
    };



    _.each(array, function(element, index, array) {
        if (element.gender === 'female') {
            genderArray.female++;

        }
        else if (element.gender === 'male') {
            genderArray.male++;
        }
        else if (element.gender === 'transgender') {
            genderArray.transgender++;
        }
    });

    return genderArray;


};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
