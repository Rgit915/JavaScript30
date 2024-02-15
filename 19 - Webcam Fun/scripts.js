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
  return setInterval(() => {
    // Draw the current video frame onto the canvas
    ctx.drawImage(video, 0, 0, width, height);

    // Get the pixel data from the canvas and apply red color effect
    let pixels = ctx.getImageData(0, 0, width, height);
    //pixels = redEffect(pixels);

    // // Apply RGB split effect to pixel data
    // pixels = rbgSplit(pixels);

    // // Set global alpha for a ghosting effect
    // ctx.globalAlpha = 0.8;
    pixels = greenScreen(pixels);

    // Put the modified pixel data back onto the canvas
    ctx.putImageData(pixels, 0, 0);

  }, 16); // 16 milliseconds corresponds to approximately 60 frames per second
}

// Function to capture a photo from the video stream
function takePhoto() {
  // Reset the audio element's currentTime to ensure the snap sound plays from the beginning
  snap.currentTime = 0;

  // Play the snap sound
  snap.play();

  // Capture the current canvas state as a base64-encoded data URL (JPEG format)
  const data = canvas.toDataURL('image/jpeg');

  // Create a new anchor element for downloading the captured photo
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');

  // Create an image element inside the anchor with the captured photo
  link.innerHTML = `<img src="${data}" alt="photo" />`;

  // Insert the anchor element with the photo into the beginning of the strip container
  strip.insertBefore(link, strip.firstChild);

}

// Function to apply a red color effect to pixel data
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //Blue
  }
  return pixels;
}
// Function to apply RGB split effect to pixel data
function rbgSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; //Red
    pixels.data[i + 500] = pixels.data[i + 1]; //Green
    pixels.data[i - 550] = pixels.data[i + 2]; //Blue
  }
  return pixels;
}

// Function to apply green screen effect to pixel data based on input levels
function greenScreen(pixels) {
  // Object to store input levels for red, green, and blue
  const levels = {};

  // Get input values from RGB sliders and store them in the levels object
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // Loop through pixel data
  for (let i = 0; i < pixels.data.length; i += 4) {
    // Extract individual color components and alpha from pixel data
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // Check if pixel color values are within the specified range
    if (
      red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax
    ) {
      // Set alpha to 0 to make the pixel transparent
      pixels.data[i + 3] = 0;
    }
  }

  // Return the modified pixel data
  return pixels;
}

getVideo();
// Event listener to trigger the paintToCanvas function when the video is ready to play
video.addEventListener('canplay', paintToCanvas);
