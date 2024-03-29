// 42. Write a function to get the current date and time.
const dt = () => {
    let d = new Date();
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    return `Date => ${day}-${month}-${year} | Time => ${hour}:${min}:${sec}`
}
console.log(dt())