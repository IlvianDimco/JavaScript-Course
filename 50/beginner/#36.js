// 36. Write a function to slice an array.
const sliceArray = (arr, pos1, pos2) => {
    // return arr.slice(pos1, pos2)
    slicedArr = []
    for (let i = pos1; i < pos2; i++) {
        slicedArr.push(arr[i])
    }
    return slicedArr
}
let myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(sliceArray(myArray, 10, 13));