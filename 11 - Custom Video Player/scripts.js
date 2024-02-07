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
video.currentTime += parseFloat(this.dataset.skip);
}

// Function to update the video element properties based on input range changes
function handleRangeUpdate() {
  // 'this' refers to the input range element
  // Update the corresponding property on the video element with the current value
  video[this.name] = this.value;
}

// Function to update the progress bar based on video playback progress
function handleProgress() {
  // Calculate the percentage of video playback completion
  const percent = (video.currentTime / video.duration) * 100;
  // Set the flexBasis style of the progress bar to reflect the percentage
  progressBar.style.flexBasis = `${percent}%`;
}
// Function to update video playback time based on user scrubbing the progress bar
function scrub(e) {
  // Calculate the scrub time based on the mouse position relative to the progress bar
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // Set the video's current time to the calculated scrub time
  video.currentTime = scrubTime;
}

// Event listeners to toggle play/pause on video click and update button icon
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // Update button on video play
video.addEventListener('pause', updateButton); // Update button on video pause
video.addEventListener('timeupdate', handleProgress); //update the progress bar during video playback

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

// Event listeners to call handleRangeUpdate when input range elements change
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

// Variable to track whether the mouse button is pressed
let mousedown = false;

// Event listeners for scrubbing functionality
progress.addEventListener('click', scrub); // Scrub on click
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // Scrub on mousemove if mousedown
progress.addEventListener('mousedown', () => mousedown = true); // Set mousedown to true on mouse down
progress.addEventListener('mouseup', () => mousedown = false); // Set mousedown to false on mouse up