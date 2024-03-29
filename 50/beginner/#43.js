// 43. Write a function to get the day of the week from a given date.
const getWeekday = (date) => {
    let d = new Date(date)
    let weekday = d.getDay()
    return weekday
}
console.log(getWeekday("2021-03-25"))