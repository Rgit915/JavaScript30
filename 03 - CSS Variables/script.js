//select all input elements with class'.controls input'
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //Get the dataset(data-sizing) and value from the input
  const suffix = this.dataset.sizing || '';
  const value = this.value;

  //Update the CSS variable
  document.documentElement.style.setProperty(`--${this.name}`, value + suffix)

}

// Listen for change on each input element
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate) // call function when input value changes
});

inputs.forEach(input => {
  input.addEventListener('mousemove', handleUpdate) // Real-time updates
});