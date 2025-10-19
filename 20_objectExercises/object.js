const user = {};

function isEmpty (object) {
    return (
        (typeof object === 'object' && Object.keys(object).length === 0)
    );
}

console.log(isEmpty(user));

