// Selecting the element with the class 'items' for the slider functionality
const slider = document.querySelector('.items');

// Variables to track slider state and mouse position
let isDown = false;
let startX;
let scrollLeft;

// Event listener for mouse down on the slider
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Event listener for mouse leave on the slider
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
