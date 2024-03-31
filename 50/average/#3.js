// 3. Write a function that takes an array of integers and returns a new array with only the even numbers.
function evenNumbers(arr) {
    return arr.filter(i => i % 2 === 0)
    // let result = []
    // for (i of arr) {
    //     if (i % 2 === 0) {
    //         result.push(i)
    //     }
    // }
    // return result
}
let testArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
console.log(evenNumbers(testArr))