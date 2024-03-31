// 47. Write a function to subtract days from a given date.
const subtract_days_from_date = (date, daysToCalc) => {
    let day = new Date(date)
    day.setDate(day.getDate() - daysToCalc)
    return day
}
console.log(subtract_days_from_date("2021-03-25", 4))