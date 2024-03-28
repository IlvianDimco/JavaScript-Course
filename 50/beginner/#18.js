// 18. Write a function to check if a given year is a leap year.
const leapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

console.log(leapYear(2022))