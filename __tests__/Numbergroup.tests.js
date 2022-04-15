const Numbergroup = require('../src/Numbergroup');

test('construction test', () => {
  let somegroup = Numbergroup("PRE", 1);
  expect(somegroup.prefix).toBe("PRE");
  expect(somegroup.currentNumber).toBe(1);
});

test('when the prefix is in lower case it is converted to upper case', () => {
  let somegroup = Numbergroup("pre", 1);
  expect(somegroup.prefix).toBe("PRE");
});

