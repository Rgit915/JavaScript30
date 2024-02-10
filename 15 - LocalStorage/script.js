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

// Populating the list with items when the page loads
populateList(items, itemsList);

// Reset the form for the next input
this.reset();
}

// Function to populate the list with items
function populateList(plates = [], platesList){
  // Set the HTML content of the list element by mapping through the 'plates' array
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''}>
    <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

// Adding an event listener to the form, calling addItem function on submit
addItems.addEventListener('submit', addItem);
