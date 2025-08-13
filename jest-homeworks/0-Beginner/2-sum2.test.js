const sum = require("./2-sum2");
test("test1", () => {
  expect(sum(1, 2)).toBe(3);
});
test("test1", () => {
  expect(sum(-1, 3)).toBe(2);
});
test("test1", () => {
  expect(() => sum(1, "e")).toThrow();
});
