// Variable to store the interval ID for the countdown timer
let countdown;
let originalSeconds;
// Selecting the DOM element with the class 'display__time-left'
const timerDisplay = document.querySelector('.display__time-left');
// Selecting the DOM element with the class 'display__end-time'
const endTime = document.querySelector('.display__end-time');
// Selecting all buttons with the 'data-time' attribute
const buttons = document.querySelectorAll('[data-time]');
const myBar = document.querySelector('#myBar');

// Function to initiate a countdown timer
function timer(seconds) {
  originalSeconds = seconds;
  // clear any existing timers
  clearInterval(countdown);

  // Calculating the current timestamp and the target timestamp
  const now = Date.now();
  const then = now + seconds * 1000;

  // Displaying the initial time left
  displayTimeLeft(seconds);
  displayEndTime(then);

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

  // Calculating the progress percentage from 0 to 100
  const progress = ((originalSeconds - seconds) / originalSeconds) * 100;

  // Updating the progress bar width from left to right
  myBar.style.width = `${progress}%`;
}
// Function to display the end time based on a given timestamp
function displayEndTime(timestamp) {
  // Creating a new Date object using the provided timestamp
  const end = new Date(timestamp);

  // Extracting hours and minutes from the end time
  const hour = end.getHours();
  const minutes = end.getMinutes();

  // Formatting the end time display with a 12-hour clock and leading zero for single-digit minutes
  endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// Function to start the timer based on the clicked button's data-time attribute
function startTimer() {
  // Parsing the 'data-time' attribute value to get the number of seconds
  const seconds = parseInt(this.dataset.time);

  // Calling the timer function with the specified number of seconds
  timer(seconds);
}

// Adding click event listeners to all buttons to start the timer
buttons.forEach(button => button.addEventListener('click', startTimer));
// Adding a submit event listener to the 'customForm' form
document.customForm.addEventListener('submit', function (e) {
  // Preventing the default form submission behavior
  e.preventDefault();

  // Extracting the value entered in the 'minutes' input field
  const mins = this.minutes.value;

  // Calling the timer function with the specified number of minutes converted to seconds
  timer(mins * 60);

  // Resetting the form after submission
  this.reset();
});
