function dominantDirection(txt){
    
    //helper function from earlier in the chapter which 
    //takes the text, invokes countBy which takes in text and char
    // and invokes characterScript which ids the script, pasing back it's name to countBy
    //countBy then updates the name and count in an array of objects
    //countBy returns that array of objects to the variable countedScripts
    
    let countedScripts = countBy( function(text, char) {
        let countedScript = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");
    
    //if the array of counted scripts has a length of 0 then there are no scripts, 
    //or possible no recoginized scripts in the array so "ltr" is returned
    
    if (countedScript.length == 0) return "ltr";
    
    //if the array has length we need to then determin which script is most dominant
    //and then reference it's direction information in the SCRIPTS array
    
    return countedScript.reduce( function(highestCount, currentElementCount){
        let dominantScript = highestCount.count < currentElement.count ? currentElementCount : highestCount;
        return dominantScript.name;
    });

    
    
}
