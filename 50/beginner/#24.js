// 24. Write a function to count the number of consonants in a string.
const consonants = (str) => {
    // return str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g).length;
    const vowelsList = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"]
    let count = 0
    for (let i of str) {
        for (let j of vowelsList) {
            if (i === j) {
                count++
            }
        }
    }
    return str.length - count
}
console.log(consonants("Hello"))