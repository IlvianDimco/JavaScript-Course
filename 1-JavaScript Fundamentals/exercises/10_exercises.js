// 1. Calculate the Area of a Rectangle:
// Write a function that takes the length and width of a rectangle as parameters and returns the area of the rectangle.
const rectangleArea = (length, width) => {
    return length * width
}
console.log("Rectangle area function:", rectangleArea(4, 6))

// 2. Check if a Number is Even or Odd:
// Write a function that takes a number as a parameter and returns "Even" if the number is even and "Odd" if it's odd.
const oddOrEven = (number) => {
    return number % 2 === 0 ? "Even" : "Odd"
}
console.log("Check if a Number is Even or Odd:", oddOrEven(7))

// 3. Reverse a String:
// Write a function that takes a string as a parameter and returns the reverse of that string.
const revString = (string) => {
    let reversedString = ""
    for (let x = string.length - 1; x >= 0; x--) {
        reversedString += string[x]
    }
    return reversedString
}
console.log("Reverse a String:", revString("Hello"))

// 4. Find the Maximum Number in an Array:
// Write a function that takes an array of numbers as a parameter and returns the maximum number in the array.
let myArray = [1, 3, 6, 2, 4, 12, 8, 44, 1, 4, 4, 55, 3]
const maxNumber = (arr) => {
    arr.sort(function (a, b) { return a - b })
    return (arr[arr.length - 1])
}
console.log("Find the Maximum Number in an Array (method 1):", maxNumber(myArray))

const maxNumber_2 = (arr) => {
    let max = arr[0]
    for (let x of arr) {
        if (x > max) {
            max = x
        }
    }
    return max
}
console.log("Find the Maximum Number in an Array (method 2):", maxNumber_2(myArray))

const maxNumber_3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length - 1];
};
console.log("Find the Maximum Number in an Array (method 3):", maxNumber_3(myArray))

// 5. Calculate the Factorial of a Number:
// Write a function that takes a number as a parameter and returns the factorial of that number.
const factorial = (number) => {
    let result = 1
    if (number === 0) {
        return 1
    } else if (number < 0) {
        return (`Negative integer factorials like ${number} are undefined`)
    } else {
        for (let i = number; i >= 1; i--) {
            (result *= i)
        }
    }
    return result
}
console.log("Calculate the Factorial of a Number (method 1):", factorial(-2))

function factorial_2(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial_2(number - 1);
    }
}
console.log("Calculate the Factorial of a Number (method 2):", factorial_2(5));

// 6. Check for Palindrome:
// Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise returns false.
const isPalindrome = (string) => {
    return string === revString(string)
}
console.log("Check for Palindrome (method 1):", isPalindrome("anna"))

function isPalindrome_2(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log("Check for Palindrome (method 2):", isPalindrome_2("A man, a plan, a canal, Panama!"))

function isPalindrome_3(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = cleanStr.length - 1;
    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log("Check for Palindrome (method 3):", isPalindrome_3("A man, a plan, a canal, Panama!"))

// 7. Count the Number of Vowels in a String:
// Write a function that takes a string as a parameter and returns the number of vowels (a, e, i, o, u) in that string.
const numVowels = (string) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let counter = 0
    for (let i of string) {
        for (let j of vowels) {
            if (i === j) {
                counter++
            }
        }
    }
    return counter
}
console.log("Count the Number of Vowels in a String (method 1):", numVowels("Hello World"))

function numVowels_1(str) {
    const vowels = /[aeiou]/gi;
    const vowelMatch = str.match(vowels);
    return vowelMatch.length
}
console.log("Count the Number of Vowels in a String (method 2):", numVowels_1("Hello World"))

// 8. Sum of Positive Numbers in an Array:
// Write a function that takes an array of numbers as a parameter and returns the sum of all positive numbers in the array.
const sumPositive = (arr) => {
    let sum = 0
    for (let x of arr) {
        sum = x >= 0 ? sum += x : sum += 0
    }
    return sum
}
const numArray = [1, -1, 2, -2, 3, -3, 4, -4]
console.log("Sum of Positive Numbers in an Array (method 1):", sumPositive(numArray))

const sumPositive_2 = (arr) => {
    let sum = 0;
    for (let x of arr) {
        if (x > 0) {
            sum += x;
        }
    }
    return sum;
}
console.log("Sum of Positive Numbers in an Array (method 2):", sumPositive_2(numArray))

// 9. Find the Longest Word in a Sentence:
// Write a function that takes a sentence as a parameter and returns the longest word in the sentence.
const longestWord = (sentence) => {
    let ignore = [",", ":", " ", ")", "!"]
    let word = ""
    let longest = ""
    for (let i of sentence) {
        if (!ignore.includes(i)) {
            word += i
        } else {
            if (word.length > longest.length) {
                longest = word
            }
            word = ""
        }
    }
    if (word.length > longest.length) {
        longest = word
    }
    return longest
}
let testString = "The most popular language in the world is JavaScript, is easy and is fun :) !!!!"
console.log("Find the Longest Word in a Sentence:", longestWord(testString))

const longestWord_2 = (sentence) => {
    const ignore = [",", ":", " ", ")", "!"];
    let word = "";
    let longest = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        let isIgnore = false;
        for (let j = 0; j < ignore.length; j++) {
            if (char === ignore[j]) {
                isIgnore = true;
                break;
            }
        }
        if (!isIgnore) {
            word += char;
        } else {
            if (word.length > longest.length) {
                longest = word;
            }
            word = "";
        }
    }
    if (word.length > longest.length) {
        longest = word;
    }
    return longest;
}
console.log("Find the Longest Word in a Sentence:", longestWord_2(testString));


// 10. Check if a Number is Prime:
// Write a function that takes a number as a parameter and returns true if it's a prime number, otherwise returns false.
const primeNumber = (number) => {
    if (number <= 1){
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log("Check if a Number is Prime:", primeNumber(1))