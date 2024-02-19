// Create a SpeechSynthesisUtterance object for handling speech synthesis
const msg = new SpeechSynthesisUtterance();

// Array to store available voices
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]'); //element for choosing voices
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak'); //for initiating speech synthesis
const stopButton = document.querySelector('#stop');  //for stopping speech synthesis

// Set the text content of the SpeechSynthesisUtterance to the value of the text input
msg.text = document.querySelector('[name="text"]').value;

// Function to populate the voices dropdown with available voices
function populateVoices() {
  // Update the 'voices' array with the available voices
  voices = this.getVoices();

  // Populate the dropdown options with voice names and languages
  voicesDropdown.innerHTML = voices
  .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Function to set the selected voice for speech synthesis
function setVoice() {
  // Find and set the voice in the SpeechSynthesisUtterance based on the selected option value
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}
// Function to toggle speech synthesis, canceling the current speech and optionally restarting
function toggle(startOver = true) {
  // Cancel any ongoing speech synthesis
  speechSynthesis.cancel();

  // If specified, initiate speech synthesis with the current SpeechSynthesisUtterance
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// Function to set SpeechSynthesisUtterance options and trigger speech synthesis
function setOption() {
  msg[this.name] = this.value;
  toggle();
}

// Event listener for the 'voiceschanged' event to trigger voice population
speechSynthesis.addEventListener('voiceschanged', populateVoices);


// Event listener for the 'change' event on the voices dropdown to set the selected voice
voicesDropdown.addEventListener('change', setVoice);

// Event listeners for changes in options to update SpeechSynthesisUtterance and trigger speech synthesis
options.forEach(option => option.addEventListener('change', setOption));

// Event listener for the speak button to toggle speech synthesis on click
speakButton.addEventListener('click', toggle);

// Event listener for the stop button to toggle speech synthesis and cancel speech on click
stopButton.addEventListener('click', () => toggle(false));
