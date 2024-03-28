// 22. Write a function to check if a string is a palindrome.
const isPalindrome = (str) => {
    let revstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i]
    }
    return str === revstr
    // const newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // return newStr === newStr.split('').reverse().join('');
}
console.log(isPalindrome("anna"))