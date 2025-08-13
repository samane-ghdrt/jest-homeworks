const checkAge = require("./0-checkAge");
describe("check age", () => {
  test("test first", () => {
    expect(checkAge(20)).not.toBeUndefined();
  });
  test("test first", () => {
    expect(checkAge(16)).toBeUndefined();
  });
});
