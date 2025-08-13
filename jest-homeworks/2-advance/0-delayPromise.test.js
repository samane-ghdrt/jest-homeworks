const delayPromise = require("./0-delayPromise");

describe("test", () => {
  test("should delayPromise", async () => {
    const start = Date.now();
    const result = await delayPromise(5);
    const end = Date.now();
    const duration = end - start;
    expect(duration).toBeGreaterThanOrEqual(1000);
    expect(result).toEqual({ id: 5, name: `User 5` });
  });
});
