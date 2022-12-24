const countDown = require("./countdown.js");

describe("tests for countdown function", () => {
  it("should count num", () => expect(countDown(3)).toBe(321));
  it("should count num", () => expect(countDown(0)).toBe(0));
  it("should count num", () => expect(countDown(-7)).toBe(-7));
});