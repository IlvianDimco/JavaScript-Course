// 17. Write a function to generate the Fibonacci sequence up to a certain number of terms.
const fibonacci = (times) => {
    let fiboNum = [0, 1]
    if (times <= 0) {
        return []
    } else if (times === 1) {
        return [0]
    } else if (times === 2) {
        return [0, 1]
    }
    for (i = 2; i < times; i++) {
        let nextNum = fiboNum[i - 1] + fiboNum[i - 2]
        fiboNum.push(nextNum)
    }
    return fiboNum
}
console.log(fibonacci(10))