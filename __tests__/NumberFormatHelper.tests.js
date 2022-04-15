const FormatNumber = require("../src/NumberFormatHelper");

test('when we request the formatted version of the number, we get a three digit version starting with \'s', () => {
    let number = FormatNumber(1, 3);
    expect(number).toBe("001");
});

test('when the number is bigger that 999 more digits are added', () => {
    let number = FormatNumber(1000, 3);
    expect(number).toBe("1000");
});