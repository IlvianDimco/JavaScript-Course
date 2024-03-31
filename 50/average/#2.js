// 2. Implement a function that takes a string and returns the reverse of that string.
function reverseStr(str) {
    return str.split("").reverse().join("")
    // let reversedStr = ""
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i]
    // }
    // return reversedStr
}
console.log(reverseStr("Hello"))