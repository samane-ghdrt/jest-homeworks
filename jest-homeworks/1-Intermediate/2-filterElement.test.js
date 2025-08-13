const filterElement = require("./2-filterElement");

describe("test", () => {
  test("should first", () => {
    expect(filterElement(["apple", "orage"], "grape")).toEqual([]);
  }),
    test("should second", () => {
      expect(filterElement(["apple"], "apple")).toEqual(["apple"]);
    });
});
