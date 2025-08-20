const removeFromArray = function(array, ...args) {
    array.filter(item => !args.contain())
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
