// The stages of naming:
// Meaningless
// Accurate
// Precise/Specific
// Meaningful

import { createAgeCalculator } from "./age-calculator";

describe("agecalculator", () => {
  describe("already had birthday this year", () => {
    test.each([
      { birthDate: "1979/02/15", targetDate: "2000/03/21", expected: 21 },
      { birthDate: "1950/01/31", targetDate: "2001/03/21", expected: 51 },
      { birthDate: "2015/03/10", targetDate: "2022/03/21", expected: 7 },
    ])(
      "birthdate: $birthDate, targetDate: $targetDate, expected: $expected",
      ({ birthDate, targetDate, expected }) => {
        // Arrange
        const sut = createAgeCalculator();
        // Act
        const actual = sut(new Date(birthDate), new Date(targetDate));
        // Assert
        expect(actual).toBe(expected);
      }
    );
  });
});
