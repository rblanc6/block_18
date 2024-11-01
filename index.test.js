const { multiplication } = require("./index");

test("Multiply 4 times 5 equals to 20", () => {
  expect(multiplication(4, 5)).toBe(20);
});

test("Multiply 5 and 6 equals to 30", () => {
  expect(multiplication(5, 6)).toBe(30);
});

