function Reference(prefix, number)
{
    let api = {}

    api.prefix = prefix.toUpperCase();
    api.number = number;

    const NUMBERWIDTH = 3;

    api.getNumberFormatted = () => {
        let numberString = api.number.toString();
        while (numberString.length < NUMBERWIDTH) {
            numberString = "0" + numberString;
        }
        return numberString;
    }

    return api;
}

module.exports = Reference;