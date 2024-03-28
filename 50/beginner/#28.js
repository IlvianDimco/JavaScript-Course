// 28. Write a function to find the average of all elements in an array.
const arrAvg = (arr) => {
    let total = 0;
    for (let i of arr) {
        total += i;
    }
    return total / arr.length;
};
let myArray = [1, 2, 3, 4, 5];
console.log(arrAvg(myArray));