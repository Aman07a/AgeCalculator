export function createAgeCalculator() {
  return function (birthDate: Date, targetDate: Date) {
    const completedYears = targetDate.getFullYear() - birthDate.getFullYear();
    if (hasHadBirthday(birthDate, targetDate)) return completedYears;
    return completedYears - 1;
  };
}

function hasHadBirthday(birthDate: Date, targetDate: Date) {
  return (
    birthDate.getMonth() < targetDate.getMonth() ||
    (birthDate.getMonth() === targetDate.getMonth() &&
      birthDate.getDate() <= targetDate.getDate())
  );
}
