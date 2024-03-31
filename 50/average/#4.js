// 4. Create a function that takes a string and returns the number of vowels in it.
function vowelsInStr(str) {
    return str.match(/[aeiouy]/gi).length
    // let vowels = ["a", "e", "i", "o", "u", "y"]
    // let count = 0
    // for (i of str) {
    //     for (j of vowels) {
    //         if (i === j) {
    //             count++
    //         }
    //     }
    // }
    // return count
}
console.log(vowelsInStr("Hello my name is John."))