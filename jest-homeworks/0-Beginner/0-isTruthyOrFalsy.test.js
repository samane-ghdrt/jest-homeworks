const isTruthyOrFalsy=require('./0-isTruthyOrFalsy')
test("test truthy values", () => {
   expect(isTruthyOrFalsy(true)).toBeTruthy()
});

test("test falsy values", () => {
   expect(isTruthyOrFalsy(false)).toBeFalsy()
});