export function createAgeCalculator() {
  return function (birthDate: Date, targetDate: Date) {
    return targetDate.getFullYear() - birthDate.getFullYear();
  };
}
