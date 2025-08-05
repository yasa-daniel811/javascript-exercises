const reverseString = function(stringToReverse) {
    let i = 0;
    let reversedString = "";

    while (i < stringToReverse.length) {
        reversedString += stringToReverse.charAt(stringToReverse.length - i - 1);
        i++;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
