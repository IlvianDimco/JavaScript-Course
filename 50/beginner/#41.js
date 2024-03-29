// 41. Write a function to split a string into an array of substrings.
const splitString = (str) => {
    // return str.split(" ")
    let substringArr = []
    let substring = ""
    for (i of str) {
        if (i !== " ") {
            substring += i
        } else {
            substringArr.push(substring)
            substring = ""
        }
    }
    if (substring !== "") {
        substringArr.push(substring)
    }
    return substringArr
}
console.log(splitString("hello my name is john doe"))