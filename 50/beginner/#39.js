// 39. Write a function to convert a string to uppercase.
const upperCase = (str) => {
    // return str.toUpperCase()
    let uppStr = ""
    for (let i = 0; i < str.length; i++) {
        letter = str.charCodeAt(i)
        if (letter >= 97 && letter <= 122) {
            uppStr += String.fromCharCode(letter - 32)
        } else {
            uppStr += str[i]
        }
    }
    return uppStr
}
console.log(upperCase("hello my name is john doe"))