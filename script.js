function possibleMoves(array) {
    var firstIndexToMatch;
    var secondIndexToMatch;
    var arrayLength = array.length-1;
    for (i=0; i<arrayLength; i++){
        firstIndexToMatch = "";
        secondIndexToMatch = "";
        firstIndexToMatch += array[i];
        secondIndexToMatch += array[i+1];
        //possibleMove(firstIndexToMatch, secondIndexToMatch);
        if (!possibleMove(firstIndexToMatch, secondIndexToMatch)) {
            
            console.log("Your knight was not able to jump from field " + firstIndexToMatch +             " to field " + secondIndexToMatch);
            break;
        
        }
    }
    
    if (possibleMove(firstIndexToMatch, secondIndexToMatch))
        console.log("Your knight was able to jump to all fields!");
        
}

function possibleMove(fromField, toField) {
    
    var fromLetter = fromField.charAt(0);
    var fromNumber = fromField.charAt(1);
    var toLetter = toField.charAt(0);
    var toNumber = toField.charAt(1);
    var linearArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var startLetter = linearArray.indexOf(fromLetter);
    
    if ((parseInt(fromNumber)+2 == toNumber) && (linearArray[startLetter-1] == toLetter))
        return true;
    else if ((parseInt(fromNumber)+2 == toNumber) && (linearArray[startLetter+1] == toLetter))
        return true;
    else if ((parseInt(fromNumber)-2 == toNumber) && (linearArray[startLetter-1] == toLetter))
        return true;
    else if ((parseInt(fromNumber)-2 == toNumber) && (linearArray[startLetter+1] == toLetter))
        return true;
    else if ((linearArray[startLetter+2] == toLetter) && (parseInt(fromNumber)+1 == toNumber))
        return true;
    else if ((linearArray[startLetter+2] == toLetter) && (parseInt(fromNumber)-1 == toNumber))
        return true;
    else if ((linearArray[startLetter-2] == toLetter) && (parseInt(fromNumber)+1 == toNumber))
        return true;
    else if ((linearArray[startLetter-2] == toLetter) && (parseInt(fromNumber)-1 == toNumber))
        return true;
    else
        return false;
}

//possibleMove("e3", "f5");

possibleMoves(["g3", "h1", "f2", "d1", "c3", "b5", "a7", "c6", "d4", "c2", "e1"]);

  
// za 2 gor + 1 levo
// za 2 gor + 1 desno
// za 2 dol + 1 levo
// za 2 dol + 1 desno

// za 2 desno + 1 gor
// za 2 desno + 1 dol
// za 2 levo + 1 gor
// za 2 levo + 1 dol