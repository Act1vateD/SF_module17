const revertString = require("./revertSTR.js");

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
  it("should reverse string", () => expect(revertString(5645)).toBe("Это не слово"));
});