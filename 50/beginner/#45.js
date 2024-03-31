// 45. Write a function to get the year from a given date.
const getYearFromDate = (date) => {
    let d = new Date(date)
    let year = d.getFullYear()
    return year
}
console.log(getYearFromDate("2021-03-25"))