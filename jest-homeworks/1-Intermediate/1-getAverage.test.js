const getAverage = require("./1-getAverage");

describe("getAverage", () => {
  test("should first", () => {
    expect(getAverage(6, 7, 6)).toBeGreaterThan(6);
  });
  test("should second", () => {
    expect(getAverage(2, 3, 4)).toBeLessThan(5);
  });
  test("should thrid", () => {
    expect(getAverage(5, 6, 4)).toEqual(5);
  });
});
