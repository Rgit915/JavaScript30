// Selecting the form with the class 'add-items'
const addItems = document.querySelector('.add-items');
// Selecting the element with the class 'plates' to display the items
const itemsList = document.querySelector('.plates');

// Retrieve 'items' from local storage and parse as JSON, or initialize an empty array if no items are found
let items = JSON.parse(localStorage.getItem('items')) || [];


// Function to add a new item when the form is submitted
function addItem(e) {
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

  updateItems();

  // Reset the form for the next input
  this.reset();
}

// Function to populate the list with items
function populateList(plates = [], platesList) {
  // Set the HTML content of the list element by mapping through the 'plates' array
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
    <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

// Function to toggle the 'done' property of an item when its checkbox is clicked
function toggleDone(e) {
  // Check if the clicked element is an input (checkbox)
  if (!e.target.matches('input')) return;

  // Get the clicked checkbox element
  const el = e.target;
  // Get the index from the dataset attribute
  const index = el.dataset.index;

  // Toggle the 'done' property of the corresponding item in the items array
  items[index].done = !items[index].done;

  updateItems();

}


// Function to check/uncheck all items
function toggleCheck() {
  const areAllChecked = items.every(item => item.done);

  items.forEach(item => {
    item.done = !areAllChecked;
  });

  // Update local storage and repopulate the list
  updateItems();
}

// Function to delete checked items
function deleteChecked() {
  // Filter out checked items
  items = items.filter(item => !item.done);

  // Update local storage and repopulate the list
  updateItems();
}


// Function to update local storage and repopulate the list
function updateItems() {
  // Update local storage with the modified items array
  localStorage.setItem('items', JSON.stringify(items));

  // Repopulate the list to reflect the updated 'done' status
  populateList(items, itemsList);
}


// Adding an event listener to the form, calling addItem function on submit
addItems.addEventListener('submit', addItem);

// Adding an event listener to the itemsList for the 'click' event, calling toggleDone function
itemsList.addEventListener('click', toggleDone);

// Populate the list with items when the page loads
populateList(items, itemsList);