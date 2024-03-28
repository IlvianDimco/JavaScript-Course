// 23. Write a function to count the number of vowels in a string.
const vowels = (str) => {
    const vowelsList = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"]
    let count = 0
    for (let i of str) {
        for (let j of vowelsList) {
            if (i === j) {
                count++
            }
        }
    }
    return (count)
}
console.log(vowels("hello"))