/** Find Floor tests */

const findFloor = require("./findFloor");

describe("#findFloor", () => {
  it("returns floor or -1", () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2); // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19); // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1); // -1
  });
});
