// Variable to store the interval ID for the countdown timer
let countdown;

// Function to initiate a countdown timer
function timer(seconds) {
  // Calculating the current timestamp and the target timestamp
  const now = Date.now();
  const then = now + seconds * 1000;

  // Setting up an interval to update the countdown every second
  countdown = setInterval(() => {
    // Calculating the remaining seconds
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Clearing the interval and exiting the function if time is up
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    // Logging the remaining seconds to the console
    console.log(secondsLeft);
  }, 1000);
}
