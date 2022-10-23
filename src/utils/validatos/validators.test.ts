import { maxLength, minLenght, stripHtml } from "./validators";

describe("stripHtml()", () => {
  it("strips all html tag from an input", () => {
    const htmlInput =
      "<div><p>This is the first paragraph.</p><p>This is the second paragraph.</p></div>";
    const expectedResult = "This is the first paragraph.This is the second paragraph.";

    const result = stripHtml(htmlInput);

    expect(result).toBe(expectedResult);
  });
});

describe("minLenght()", () => {
  it("returns false when passed an empty string", () => {
    const emptyString = "";

    const result = minLenght(emptyString);

    expect(result).toBe(false);
  });

  it("returns true when string in greater then passed min size", () => {
    const testString = "This is the test string";
    const minSize = 10;

    const result = minLenght(testString, 10);

    expect(result).toBe(true);
  });

  it("works correcty when passed string has html tags", () => {
    const testString = "<div><p>Hello</p></div>";
    const minSize = 10;

    const result = minLenght(testString, minSize);

    expect(result).toBe(false);
  });
});

describe("maxLenght()", () => {
  it("returs true when passed string is smaller then max size", () => {
    const testString = "Hello you";
    const maxSize = 11;

    const result = maxLength(testString, maxSize);

    expect(result).toBe(true);
  });

  it("returs false when passed string is greater then max size", () => {
    const testString = "Hello";
    const maxSize = 3;

    const result = maxLength(testString, maxSize);

    expect(result).toBe(false);
  });

  it("works correcty when passed string has html tags", () => {
    const testString = "<div><p>Hello</p></div>";
    const maxSize = 10;

    const result = maxLength(testString, maxSize);

    expect(result).toBe(true);
  });
});
