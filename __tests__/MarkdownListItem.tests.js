const MarkdownListItem = require("../src/MarkdownListItem");
const Reference = require("../src/Reference");

test('simplest format of a list item works', () => {
    let item = MarkdownListItem(0, "Hello World");
    let result = item.render();

    expect(result).toBe("- Hello World");
});

test('indentation moves the list item by the number of spaces right', () => {
    let item = MarkdownListItem(2, "Hello World");
    let result = item.render();

    expect(result).toBe("  - Hello World");
});

test("false as checkbox value means, we have a checkbox, but it is not checked yet", () => {
    let item = MarkdownListItem(0, "Hello World", false);
    let result = item.render();

    expect(result).toBe("- [ ] Hello World");
});

test("true as value means the checkbox is checked", () => {
    let item = MarkdownListItem(0, "Hello World", true);
    let result = item.render();

    expect(result).toBe("- [X] Hello World");
});

test("when the checkbox value is anything else, then the text is inserted into the checkbox", () => {
    let item = MarkdownListItem(0, "Hello World", "INVALID");
    let result = item.render();

    expect(result).toBe("- [INVALID] Hello World");
});

test("when the reference value is set, then the reference is rendered into the output", () => {
    const reference = Reference("R", 1);
    let item = MarkdownListItem(0, "Hello World", undefined, reference);
    let result = item.render();

    expect(result).toBe("- (R001) Hello World");
});

test("when checkbox + reference value is set, then the reference and the checkbox are rendered into the output", () => {
    const reference = Reference("R", 1);
    let item = MarkdownListItem(0, "Hello World", undefined, reference);
    let result = item.render();

    expect(result).toBe("- [ ] (R001) Hello World");
});