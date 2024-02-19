// Select all div elements on the page
const divs = document.querySelectorAll('div');

// Function to log the classList value of a clicked div
function logText(e) {
  console.log(this.classList.value);
}

// Add click event listener to each div, triggering logText function
divs.forEach(div => div.addEventListener('click', logText ));
