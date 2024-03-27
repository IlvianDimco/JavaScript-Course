// 9. Write a function to convert Fahrenheit to Celsius.
const tempConverter_F_C = (f) => {
    return (f - 32) * 5/9
}
console.log(tempConverter_F_C(32))
console.log(tempConverter_F_C(104))
console.log(tempConverter_F_C(0))
console.log(tempConverter_F_C(-10))