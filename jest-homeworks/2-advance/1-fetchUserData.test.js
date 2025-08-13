const fetchUserData = require("./1-fetchUserData");
const data = require("./data.json");
console.log(data);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

describe("test fetch", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  test("should first", async () => {
    const result = await fetchUserData(3);
    expect(result).toEqual(data);
  });
});
