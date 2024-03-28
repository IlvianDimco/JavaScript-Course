// 30. Write a function to find the smallest element in an array.
const smallest_of_array = (arr) => {
    let smallest = arr[0]
    for (let i of arr) {
        if (i < smallest) {
            smallest = i
        }
    }
    return smallest
}
let myArray = [1, 2, 3, 4, 5];
console.log(smallest_of_array(myArray));