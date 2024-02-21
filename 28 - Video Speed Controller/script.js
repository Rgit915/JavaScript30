// Selecting DOM elements for speed control
const speed = document.querySelector('.speed'); // The container for the speed control
const bar = speed.querySelector('.speed-bar'); // The visual representation of speed
const video = document.querySelector('.flex'); // The video element to be controlled

// Event listener for mouse move on the speed control container
speed.addEventListener('mousemove', function(e) {
  // Calculating the vertical position of the mouse within the speed control container
  const y = e.pageY - this.offsetTop;

  // Calculating the percentage of mouse position relative to the container height
  const percent = y / this.offsetHeight;

  // Setting the minimum and maximum playback rates
  const min = 0.4;
  const max = 4;

  // Calculating the visual height and actual playback rate based on the percentage
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;

  // Updating the visual representation and text content of the speed bar
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';

  // Adjusting the playback rate of the video
  video.playbackRate = playbackRate;
});
