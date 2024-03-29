// 33. Write a function to check if an element exists in an array.
const find_element = (arr, el) => {
    for (let i of arr) {
        if (i === el) {
            return true
        }
    }
    return false
}
let myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(find_element(myArray, 6));
console.log(find_element(myArray, 3));