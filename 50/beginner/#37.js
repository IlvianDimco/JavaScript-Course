// 37. Write a function to join elements of an array into a string.
const join_arr_to_str = (arr) => {
    // return arr.join();
    let joinMethod = ""
    for (let i = 0; i < arr.length; i++) {
        joinMethod += arr[i]
        if (i !== arr.length - 1) {
            joinMethod += ","
        }
    }
    return joinMethod
}
let myArray = ["King", "Queen", "Jack"];
console.log(join_arr_to_str(myArray));