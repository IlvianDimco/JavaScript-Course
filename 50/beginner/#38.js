const lowerCase = (str) => {
    // return str.toLowerCase();
    lowerStr = ""
    for (let i = 0; i < str.length; i++) {
        let letter = str.charCodeAt(i)
        if (letter >= 65 && letter <= 90) {
            lowerStr += String.fromCharCode(letter + 32)
        } else {
            lowerStr += str[i]
        }
    }
    return lowerStr
}
console.log(lowerCase("HELLO MY NAME IS JOHN DOE"))