const sum = require("./2-sum2");
describe("tast in sum", () => {
  test("test of the sum of 1 and 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
