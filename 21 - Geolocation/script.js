// Selecting elements from the DOM
const arrow = document.querySelector('.arrow'); // Arrow element for direction indication
const speed = document.querySelector('.speed-value'); // Speed element for displaying speed

// Watching the position using Geolocation API
navigator.geolocation.watchPosition(
  (data) => {
    // Success callback when position data is received
    console.log(data);

    // Update the displayed speed with the speed from the geolocation data
    speed.textContent = data.coords.speed;

    // Rotate the arrow to indicate the heading direction
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    // Error callback in case of geolocation error
    console.error(err);

    // Display an alert to inform the user about the error
    alert('Error');
  }
);
