// 35. Write a function to sort an array in descending order.
const sort_arr_desc = (arr) => {
    // return arr.sort((a, b) => b - a);
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}
let myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(sort_arr_desc(myArray));