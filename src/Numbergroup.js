const Reference = require("./Reference");

function Numbergroup(prefix, startingValue)
{
    let api = {}

    api.prefix = prefix.toUpperCase();
    api.currentNumber = startingValue;

    api.deriveReference = () => {
        return Reference(api.prefix, api.currentNumber++);
    }

    return api;
}

module.exports = Numbergroup;