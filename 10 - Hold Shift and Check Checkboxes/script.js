// Select all checkboxes inside elements with class 'inbox'
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // Check if the current checkbox is equal to the clicked checkbox or the last checked checkbox
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      // If the current checkbox is between the clicked checkbox and the last checked checkbox, check it
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // Update the lastChecked variable to the current checkbox
  lastChecked = this;
}

// Attach the 'click' event listener to each checkbox, calling handleCheck function
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

