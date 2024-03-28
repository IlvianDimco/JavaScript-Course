// 29. Write a function to find the largest element in an array.
const largest_of_array = (arr) => {
    let largest = arr[0]
    for (let i of arr) {
        if (i > largest) {
            largest = i
        }
    }
    return largest
}
let myArray = [1, 2, 3, 4, 5];
console.log(largest_of_array(myArray));