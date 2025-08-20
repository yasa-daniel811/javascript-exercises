const leapYears = function(year) {
    if (!Number.isInteger) return 'ERROR';
    
    if (isDivisible(year, 400) ||
        isDivisible(year, 4) && 
        !isDivisible(year, 100)) 
        return true;

    return false;

};

function isDivisible(dividend, factor) {
    return dividend % factor === 0;
}

module.exports = leapYears;
