const fibonacci = function(int) {
    if (int === 0) return 0;
    if (int === 1) return 1;

    return (fibonacci(int - 1) + fibonacci(int - 2))

};

//1, 1, 2, 3, 5, 8, 13

// Do not edit below this line
module.exports = fibonacci;
