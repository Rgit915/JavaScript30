// Selecting the form with the class 'add-items'
const addItems = document.querySelector('.add-items');
// Selecting the element with the class 'plates' to display the items
const itemsList = document.querySelector('.plates');
// Array to store the items
const items = [];

// Function to add a new item when the form is submitted
function addItem(e){
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value of the input field inside the form
  const text = (this.querySelector('[name=item')).value;

  // Create an object representing the new item
  const item = {
    text,
    done: false
  };

  // Add the new item to the items array
  items.push(item);

  // Log the updated items array to the console
  console.log(items);

  // Reset the form for the next input
  this.reset();
}

// Adding an event listener to the form, calling addItem function on submit
addItems.addEventListener('submit', addItem);
