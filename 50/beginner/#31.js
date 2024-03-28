// 31. Write a function to reverse an array.
const reverseArray = (arr) => {
    // const revArr = arr.slice();
    // revArr.reverse();
    // return revArr;
    revArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i])
    }
    return revArr
}
let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));