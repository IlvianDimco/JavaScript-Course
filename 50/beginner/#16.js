// 16. Write a function to check if a number is prime.
const isPrime = (num) => {
    if (num < 2) {
        return ("Prime numbers are greater than 1")
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return (`${num} is not prime`)
        }
    }
    return (`${num} is prime`)
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(9))
console.log(isPrime(3))