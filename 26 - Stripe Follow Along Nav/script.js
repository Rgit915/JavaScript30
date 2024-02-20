// Selecting all list items with the class 'cool' under a parent list item
const triggers = document.querySelectorAll('.cool > li');

// Selecting additional elements needed for the dropdown effect
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// Function to handle mouse enter event
function handleEnter() {
  // Adding 'trigger-enter' class to the current list item
  this.classList.add('trigger-enter');

 // Using setTimeout to add 'trigger-enter-active' class only if 'trigger-enter' class is present after 150 milliseconds
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

 // Adding 'open' class to the background element to reveal the dropdown
background.classList.add('open');

// Selecting the dropdown element within the current list item
const dropdown = this.querySelector('.dropdown');

// Getting the bounding rectangles for the dropdown, navigation, and background elements
const dropdownCoords = dropdown.getBoundingClientRect();
const navCoords = nav.getBoundingClientRect();

// Calculating the coordinates for the dropdown relative to the navigation element
const coords = {
  height: dropdownCoords.height,
  width: dropdownCoords.width,
  top: dropdownCoords.top - navCoords.top,
  left: dropdownCoords.left - navCoords.left,
};

// Setting the width and height of the background element to match the dropdown
background.style.setProperty('width', `${coords.width}px`);
background.style.setProperty('height', `${coords.height}px`);

// Adjusting the position of the background to align with the dropdown
background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

// Function to handle mouse leave event
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// Adding event listeners for mouse enter and leave to each list item
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
