// Select all div elements on the page
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// Function to log the classList value of a clicked div
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();  // Stop event bubbling
}

// Add click event listener to each div, triggering logText function
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
} ));

// Add click event listener to the button, logging 'Click' once
button.addEventListener('click', () =>{
  console.log('Click');
}, {
  once: true
})