// 40. Write a function to trim whitespace from both ends of a string.
const trimWhitespace = (str) => {
    // return str.trim()
    let start = 0
    let end = str.length - 1
    let trimStr = ""
    while (start < str.length && str[start] === " ") {
        start++
    }
    while (end >= 0 && str[end] === " ") {
        end--
    }
    for (let i = start; i <= end; i++) {
        trimStr += str[i]
    }
    return trimStr
}
console.log(trimWhitespace("  hello my name is john doe  "))