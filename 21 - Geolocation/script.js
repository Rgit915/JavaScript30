// Selecting elements from the DOM
const arrow = document.querySelector('.arrow'); // Arrow element for direction indication
const speed = document.querySelector('.speed-value'); // Speed element for displaying speed

// Simulate geolocation for testing purposes
function simulateGeolocation() {
  // Set the desired latitude and longitude for simulation
  const simulatedLatitude = 37.7749; // Example: San Francisco, CA
  const simulatedLongitude = -122.4194;

  // Create a mock GeolocationPosition object
  const simulatedPosition = {
    coords: {
      latitude: simulatedLatitude,
      longitude: simulatedLongitude,
      altitude: 0, // Optional: Add altitude if needed
      accuracy: 10, // Optional: Add accuracy if needed
      heading: 45, // Simulated heading for testing purposes
      speed: 10, // Simulated speed for testing purposes
    },
    timestamp: Date.now(),
  };

  // Call the success callback with the simulated position
  handleGeolocationSuccess(simulatedPosition);
}

// Function to handle geolocation success (add your logic here)
function handleGeolocationSuccess(position) {
  console.log('Simulated Geolocation Data:', position);
  // Your code to handle the simulated geolocation data goes here
}

// Watching the position using Geolocation API
navigator.geolocation.watchPosition(
  (data) => {
    // Success callback when position data is received
  console.log(data);

  // Update the displayed speed with the speed from the geolocation data
  speed.textContent = data.coords.speed;
// Set a default rotation value in case heading is not available
const defaultRotation = 0;

// Check if heading is available before applying rotation
if (data.coords.heading !== null && typeof data.coords.heading !== 'undefined') {
  // Rotate the arrow to indicate the heading direction
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
} else {
  console.warn('Heading not available. Using default rotation.');
  // Apply the default rotation value
  arrow.style.transform = `rotate(${defaultRotation}deg)`;
   // Update the displayed speed with the speed from the geolocation data
   speed.textContent = defaultRotation;
}
  },
  (err) => {
    // Error callback in case of geolocation error
    console.error(err);

    // Display an alert to inform the user about the error
    alert('Error');
  }
);

// Simulate geolocation data after a delay (for testing purposes)
setTimeout(simulateGeolocation, 5000); // Simulate after 5 seconds (adjust as needed)
