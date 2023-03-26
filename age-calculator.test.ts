// The stages of naming:
// Meaningless
// Accurate
// Precise/Specific
// Meaningful

import { createAgeCalculator } from "./age-calculator";

describe("agecalculator", () => {
  test("?", () => {
    // Arrange
    const sut = createAgeCalculator();
    // Act
    const actual = sut(new Date("1979/02/15"), new Date("2000/03/21"));
    // Assert
    expect(actual).toBe(21);
  });
});
