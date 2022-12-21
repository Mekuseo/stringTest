const reverseString = require("./task2");

test("reverse string with valid input", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Patricia")).toBe("aicirtaP");
});