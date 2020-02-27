// Returns the day of the week for a given date
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday"];

  return daysOfTheWeek[date.getDay()];
}

// Returns greeting for the given date
function greeting(date) {
  return `Hello, world! Happy ${dayName(date)}!`;
}