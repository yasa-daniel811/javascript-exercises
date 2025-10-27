const fibonacci = function(int) {
    if (int === 0 || int === 1) return 1 

    let counter = 1
    while (counter < int) {
        counter++
        return (fibonacci(counter - 1) + fibonacci(counter))
    }
};

//const fibonacci = function(int) {
//    if (int === 0) return 0;
//   if (int === 1) return 1;
//
//    return (fibonacci(int - 1) + fibonacci(int - 2))
//
//};

//OR

// const fibonacci = function(int) {
//     if (n === 0) return 0;
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         [a, b] = [b, a + b]
//     }
//     return b;
// }


// Do not edit below this line
module.exports = fibonacci;
