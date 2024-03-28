// 19. Write a function to reverse a string.
const reverseString = (str) => {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
    // return str.split('').reverse().join('');
}
console.log(reverseString("Hello"))