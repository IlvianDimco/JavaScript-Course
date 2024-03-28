// 26. Write a function to check if two arrays are equal.
const arrCompare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let x = 0; x < arr1.length; x++) {
        if (arr1[x] !== arr2[x]) {
            return false
        }
    }
    return true
}
arr1 = [1, 2, 3]
arr2 = [1, 2, 3]
console.log(arrCompare(arr1, arr2))