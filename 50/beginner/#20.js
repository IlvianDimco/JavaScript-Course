// 20. Write a function to find the length of a string.
const strLen = (str) => {
    let lenCount = 0
    for (let _ of str) {
        lenCount++
    }
    return (lenCount)
    // return (str.length)
}
console.log(strLen("Hello"))