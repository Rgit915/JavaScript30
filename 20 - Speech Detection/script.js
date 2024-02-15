// Check for SpeechRecognition API and use the appropriate version for the browser
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new SpeechRecognition instance
const recognition = new SpeechRecognition();

// Enable interim results to capture real-time speech
recognition.interimResults = true;

// Create a new paragraph element to display speech recognition results
let p = document.createElement('p');

// Select the container for displaying recognized words
const words = document.querySelector('.words');
words.appendChild(p);

// Event listener for the 'result' event triggered when speech is recognized
recognition.addEventListener('result', e => {
  
  console.log(e);
});

// Start the speech recognition
recognition.start();
