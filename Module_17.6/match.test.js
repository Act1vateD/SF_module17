const match = require("./match.js");

describe("tests for match function", () => {
  it("should match words", () => expect(match("woDsa", "woDsa")).toBe(true));
  it("should match words", () => expect(match("woDsa", "wODSa")).toBe(false));
  it("should match words", () => expect(match(5, "5")).toBe(false));
  it("should match words", () => expect(match(54, 25)).toBe(false));
  it("should match words", () => expect(match("5", 5)).toBe(false));
});