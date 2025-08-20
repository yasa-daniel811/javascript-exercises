const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    let i = 1;
    let repeatString = "";
    while (i <= number) {
        repeatString += string;
        i++
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
