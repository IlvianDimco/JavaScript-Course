// 50. Write a function to get the keys of an object.
const getObjKeys = (obj) => {
    // return Object.keys(obj)
    // return Object.getOwnPropertyNames(obj);
    let keys = []
    for (i in obj) {
        keys.push(i)
    }
    return keys
}
let myObj = { "Name": "James", "Surname": "Bond", "ID": 7 };
console.log(getObjKeys(myObj))