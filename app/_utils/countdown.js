export function countdown(targetDate) {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function getDays(targetDate) {
  return countdown(targetDate).days;
}

export function getHours(targetDate) {
  return countdown(targetDate).hours;
}

export function getMinutes(targetDate) {
  return countdown(targetDate).minutes;
}

export function getSeconds(targetDate) {
  return countdown(targetDate).seconds;
}

// Example usage:
const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date here

console.log(`Days: ${getDays(targetDate)}`);
console.log(`Hours: ${getHours(targetDate)}`);
console.log(`Minutes: ${getMinutes(targetDate)}`);
console.log(`Seconds: ${getSeconds(targetDate)}`);
