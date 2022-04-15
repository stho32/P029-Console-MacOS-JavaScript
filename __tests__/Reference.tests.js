const Numbergroup = require('../src/Numbergroup');
const Reference = require('../src/Reference');

test('construction test', () => {
  let reference = Reference("PRE", 1);
  expect(reference.prefix).toBe("PRE");
  expect(reference.number).toBe(1);
});

test('a reference can be derived from a numbergroup', () => {
  let somegroup = Numbergroup("pre", 27);
  let reference = somegroup.deriveReference();

  expect(reference.prefix).toBe("PRE");
  expect(reference.number).toBe(27);
});

