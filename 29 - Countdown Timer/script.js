// Variable to store the interval ID for the countdown timer
let countdown;
// Selecting the DOM element with the class 'display__time-left'
const timerDisplay = document.querySelector('.display__time-left')

// Function to initiate a countdown timer
function timer(seconds) {
  // Calculating the current timestamp and the target timestamp
  const now = Date.now();
  const then = now + seconds * 1000;

  // Displaying the initial time left
  displayTimeLeft(seconds);

  // Setting up an interval to update the countdown every second
  countdown = setInterval(() => {
    // Calculating the remaining seconds
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Clearing the interval and exiting the function if time is up
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    // Display the remaining seconds
    displayTimeLeft(secondsLeft);

  }, 1000);
}
// Function to display time left in minutes and seconds
function displayTimeLeft(seconds) {
  // Calculating minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;

  // Formatting the display string with leading zero for single-digit seconds
  const display = `${minutes}:${reminderSeconds < 10 ? '0' : ""}${reminderSeconds}`;

  // Updating the document title with the time display
  document.title = display;

  // Updating the content of a DOM element with the time display
  timerDisplay.textContent = display;

}
