// Use the BMI example from exercise #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

let massMark = 78
let heightMark = 1.69
let BMIMark = massMark / (heightMark * heightMark)

let massJohn = 92
let heightJohn = 1.95
let BMIJohn = massJohn / (heightJohn * heightJohn)

if (BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than John's!")
} else if (BMIMark < BMIJohn){
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else if (BMIMark < BMIJohn){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}