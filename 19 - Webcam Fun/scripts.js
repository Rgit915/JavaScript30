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
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // Log the media stream object to the console
      console.log(localMediaStream);
})
    .catch(err => {
      // Log any errors that occur while trying to access the webcam
      console.error('Error accessing webcam:', err);
    });
}