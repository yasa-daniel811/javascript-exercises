const getTheTitles = function(bookObjectArray) {
    return (bookObjectArray.reduce((nameArray, bookObject) => {
        nameArray.push(bookObject.title)
        return nameArray;
    }, []))
};

// Do not edit below this line
module.exports = getTheTitles;
