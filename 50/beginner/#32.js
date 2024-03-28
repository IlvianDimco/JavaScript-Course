// 32. Write a function to remove duplicate elements from an array.
const delArrDuplicates = (arr) => {
    // return Array.from(new Set(arr));
    let newArr = []
    for (let i of arr) {
        let duplicate = false
        for (let j of newArr) {
            if (i === j) {
                duplicate = true
                break
            }
        }
        if (!duplicate) {
            newArr.push(i)
        }
    }
    return newArr
}
let myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(delArrDuplicates(myArray));