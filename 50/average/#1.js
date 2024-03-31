// 1. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumOfAllArrayNumbers(arr) {
    return arr.reduce((sum, num) => sum + num)
    // let sum = 0
    // for (let i of arr) {
    //     sum += i
    // }
    // return sum
}
let testArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
console.log(sumOfAllArrayNumbers(testArr))