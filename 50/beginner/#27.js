// 27. Write a function to find the sum of all elements in an array.
const sumArray = (arr) => {
    let sumTotal = 0
    for (let i of arr) {
        sumTotal += i
    }
    return sumTotal
}
let myArray = [1, 2, 3, 4, 5]
console.log(sumArray(myArray))