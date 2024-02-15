// JavaScript code for accessing user's webcam, capturing video frames,
// and displaying them on a canvas.

// Selecting DOM elements
const video = document.querySelector('.player');  // Video element
const canvas = document.querySelector('.photo');  // Canvas element
const ctx = canvas.getContext('2d');              // 2D rendering context of the canvas
const strip = document.querySelector('.strip');   // Container for captured photo strips
const snap = document.querySelector('.snap');     // Audio element for camera snap sound

// Function to get access to the user's webcam
function getVideo() {
 // Check if the browser supports the necessary APIs
 if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Access the user's webcam with video-only, no audio
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
      // Assign the stream to the video element as the source
      video.srcObject = stream;

      // Play the video
      video.play();
    })
    .catch((err) => {
      // Log any errors that occur while trying to access the webcam
      console.error('Error accessing webcam:', err);
    });
} else {
  // Browser doesn't support getUserMedia
  console.error('getUserMedia is not supported in this browser');
}
}

// Function to paint video frames onto the canvas
function paintToCanvas() {
  // Get the width and height of the video element
  const width = video.videoWidth;
  const height = video.videoHeight;

  // Set the canvas dimensions to match the video dimensions
  canvas.width = width;
  canvas.height = height;

  // Use setInterval to continuously draw video frames onto the canvas
  setInterval(() => {
    // Draw the current video frame onto the canvas
    ctx.drawImage(video, 0, 0, width, height);
  }, 16); // 16 milliseconds corresponds to approximately 60 frames per second
}

getVideo();