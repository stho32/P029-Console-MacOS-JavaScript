const Numbergroup = require('../src/numbergroup');

test('construction test', () => {
  let somegroup = Numbergroup("PRE", 1);
  expect(somegroup.prefix).toBe("PRE");
  expect(somegroup.number).toBe(1);
});

test('when the prefix is in lower case it is converted to upper case', () => {
  let somegroup = Numbergroup("pre", 1);
  expect(somegroup.prefix).toBe("PRE");
});

test('when we request the formatted version of the number, we get a three digit version starting with \'s', () => {
  let somegroup = Numbergroup("pre", 1);
  expect(somegroup.getNumberFormatted()).toBe("001");
});

test('when the number is bigger that 999 more digits are added', () => {
  let somegroup = Numbergroup("pre", 1000);
  expect(somegroup.getNumberFormatted()).toBe("1000");
});