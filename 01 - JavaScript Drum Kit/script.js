// Listen for keydown event on the window
window.addEventListener('keydown', playSound);

// Function to play sound
function playSound(event) {
// Select audio element with the corresponding keyCode
const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
// Select key element with the corresponding keyCode
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

// If audio element exists, play the sound
if (audio) {
  audio.currentTime = 0; // Rewind to the start to allow rapid key presses
  audio.play();
}

// If key element exists, add 'playing' class for styling
if (key) {
  key.classList.add('playing');
}
}

// Function to remove 'playing' class after the transition ends
function removeTransition(event) {
  // Check if the transition property is 'transform'
  if (event.propertyName === 'transform') {
    this.classList.remove('playing');
  }
}

// Select all elements with class 'key'
const keys = document.querySelectorAll('.key');
// Add event listener to each key for transition end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
