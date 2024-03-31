// 49. Write a function to check if a property exists in an object.
const propertyExists = (obj, x) => {
    // return obj.hasOwnProperty(x)
    // return x in obj
    for (let i in obj) {
        if (i === x) {
            return true
        }
    }
    return false
}
let myObj = { "Name": "James", "Surname": "Bond", "ID": 7 };
console.log(propertyExists(myObj, "Name"))