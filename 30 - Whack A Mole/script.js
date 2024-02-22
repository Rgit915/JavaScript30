const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// Variable to keep track of the last hole
let lastHole;
let timeUp = false;
let score = 0;

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

// Function to start the game
function startGame() {
  // Reset the score to 0
  scoreBoard.textContent = 0;

  // Set the game state to not over
  timeUp = false;
  score = 0;
  // Call the peep function to make a mole appear
  peep();

  // Set a timeout to end the game after 1000ms (1 second)
  setTimeout(() => timeUp = true, 2000);
}
// Function to handle the "bonk" or mole whack event
function bonk(e) {
  // Check if the click event is trusted (prevents fake clicks)
  if (!e.isTrusted) return;

  // Increment the score
  score++;

  // Remove the 'up' class to make the mole disappear
  this.classList.remove('up');

  // Update the score display on the scoreboard
  scoreBoard.textContent = score;
}

// Add click event listeners to all moles, calling the bonk function on click
moles.forEach(mole => mole.addEventListener('click', bonk));
