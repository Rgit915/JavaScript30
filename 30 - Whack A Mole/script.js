const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// Variable to keep track of the last hole
let lastHole;
let timeUp = false;

// Function to generate a random time between min and max values
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function to randomly select a hole from the provided array
function randomHole(holes) {
  // Generate a random index within the range of the holes array
  const idx = Math.floor(Math.random() * holes.length);

  // Select a hole using the random index
  const hole = holes[idx];

  // Check if the selected hole is the same as the last one
  if (hole === lastHole) {
    console.log("Same hole as last time");
    // Recursively call the function to get a different hole
    return randomHole(holes);
  }

  // Update the lastHole variable with the current hole
  lastHole = hole;

  // Return the selected hole
  return hole;
}

// Function to make a mole appear from a random hole for a random duration
function peep() {
  // Generate a random time interval between 200ms and 1000ms
  const time = randomTime(200, 1000);

  // Select a random hole using the randomHole function
  const hole = randomHole(holes);

  // Add the 'up' class to the selected hole to make the mole appear
  hole.classList.add('up');

  // Set a timeout to remove the 'up' class after the specified time
  setTimeout(() => {
    // Remove the 'up' class to make the mole disappear
    hole.classList.remove('up');

    // If the game is still ongoing (timeUp is false), recursively call peep to make another mole appear
    if (!timeUp) peep();
  }, time);
}
