// 48. Write a function to get the length of an object.
const lenOfObj = (obj) => {
    // return Object.keys(obj).length
    let count = 0
    for (let _ in obj) {
        count++
    }
    return count
}
let myObj = { "Name": "James", "Surname": "Bond", "ID": 7 };
console.log(lenOfObj(myObj))