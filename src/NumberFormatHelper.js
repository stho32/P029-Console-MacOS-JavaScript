function FormatNumber(number, requiredWidth) {
    let numberString = number.toString();
    while (numberString.length < requiredWidth) {
        numberString = "0" + numberString;
    }
    
    return numberString;
}

module.exports = FormatNumber;