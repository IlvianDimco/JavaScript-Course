// 44. Write a function to get the month from a given date.
const getMonthFromDate = (date) => {
    let d = new Date(date)
    let month = d.getMonth() + 1
    return month
}
console.log(getMonthFromDate("2021-03-25"))