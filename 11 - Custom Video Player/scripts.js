// Selecting elements from the DOM
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Function to toggle play/pause of the video
function togglePlay() {
  // Using the 'paused' property to check if the video is paused or not
  const method = video.paused ? 'play' : 'pause';
  // Using the 'play' or 'pause' method based on the 'paused' property
  video[method]();
}

// Event listeners to toggle play/pause on video click and play button click
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
