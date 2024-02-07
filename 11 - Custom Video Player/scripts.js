// Selecting elements from the DOM
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Function to toggle play/pause of the video
function togglePlay() {
  // Using the 'paused' property to check if the video is paused or not
  const method = video.paused ? 'play' : 'pause';
  // Using the 'play' or 'pause' method based on the 'paused' property
  video[method]();
}
// Function to update the play/pause button icon based on video playback state
function updateButton() {
  // Ternary operator to determine the appropriate icon based on video pause status
  const icon = this.paused ? '►' : '❚ ❚';
  // Set the text content of the toggle button to the determined icon
  toggle.textContent = icon;
}

// Function to skip the video
function skip(){
  console.log("skip");
console.log(this.dataset.skip);
video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners to toggle play/pause on video click and update button icon
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // Update button on video play
video.addEventListener('pause', updateButton); // Update button on video pause

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
