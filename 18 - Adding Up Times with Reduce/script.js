//get all elements with a data-time attribute and convert from NodeList to Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// Map through timeNodes to extract time data, then map each timeCode to convert minutes and seconds to total seconds
const seconds = timeNodes
  .map(node => node.dataset.time) // Extract time data from data-time attribute
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // Split timeCode into minutes and seconds, convert to numbers
    return (mins * 60) + secs; // Calculate total seconds and return
  })
  .reduce((total, videoSeconds) => total + videoSeconds);

// Function to calculate and display total hours, minutes, and seconds
function displayTotalTime() {

// Output calculated hours, minutes, and seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

  // Update the HTML elements with the calculated values
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = mins;
  document.getElementById('seconds').innerText = secondsLeft;
}

// Example: Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
  displayTotalTime();
});