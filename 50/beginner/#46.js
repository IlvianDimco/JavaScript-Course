// 46. Write a function to add days to a given date.
const addDaysToDate = (date, days) => {
    let d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}
console.log(addDaysToDate("2021-03-25", 4))