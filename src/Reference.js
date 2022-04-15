function Reference(prefix, number)
{
    let api = {}

    api.prefix = prefix.toUpperCase();
    api.number = number;

    return api;
}

module.exports = Reference;