// 34. Write a function to sort an array in ascending order.
const sort_array_asc = (arr) => {
    // return arr.sort((a, b) => a - b);
    for (let first = 0; first < arr.length; first++) {
        for (let next = first + 1; next < arr.length; next++) {
            if (arr[first] > arr[next]) {
                let tmp = arr[next]
                arr[next] = arr[first]
                arr[first] = tmp
            }
        }
    }
    return arr
    // let sorted = false;
    // while (!sorted) {
    //     sorted = true;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             let tmp = arr[i + 1]
    //             arr[i + 1] = arr[i]
    //             arr[i] = tmp
    //             sorted = false;
    //         }
    //     }
    // }
    // return arr
}
let myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(sort_array_asc(myArray));