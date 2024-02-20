// Selecting all list items with the class 'cool' under a parent list item
const triggers = document.querySelectorAll('.cool > li');

// Selecting additional elements needed for the dropdown effect
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// Function to handle mouse enter event
function handleEnter() {
  // Adding 'trigger-enter' class to the current list item
  this.classList.add('trigger-enter');

  // Adding 'trigger-enter-active' class after a delay to trigger the dropdown effect
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}

// Function to handle mouse leave event
function handleLeave() {
  this.classList.remove('trigger-enter','trigger-enter-active');
}

// Adding event listeners for mouse enter and leave to each list item
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
