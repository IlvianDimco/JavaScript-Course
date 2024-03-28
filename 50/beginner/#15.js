// 15. Write a function to check if a number is positive, negative, or zero.
const pos_neg_zero = (num) => {
    if (num > 0) {
        return ("Is positive")
    } else if (num < 0) {
        return ("Is negative")
    } else {
        return ("Is zero")
    }
}
console.log(pos_neg_zero(5))
console.log(pos_neg_zero(-5))
console.log(pos_neg_zero(0))