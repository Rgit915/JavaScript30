// Function to update the clock hands based on the current time
function updateClock() {
  const now = new Date(); // Get the current date and time

  // Extract hours, minutes, and seconds from the current time
  const hours = now.getHours() % 12; // Use modulo 12 to get hours in 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Select the HTML elements representing the clock hands
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  // Calculate the rotation degrees for each clock hand
  const hourDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90; // Each hour represents 30 degrees, and each minute adds 0.5 degrees
  const minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90; // Each minute represents 6 degrees, and each second adds 0.1 degrees
  const secondDeg = ((seconds / 60) * 360) + 90;// Each second represents 6 degrees

  // Apply the rotation to the clock hands using the transform property
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Set up an interval to call the updateClock function every second
setInterval(updateClock, 1000); // Update the clock every second
updateClock();