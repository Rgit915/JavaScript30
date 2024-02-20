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

// Event listener for mouse up on the slider
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Event listener for mouse move on the slider
slider.addEventListener('mousemove', (e) => {
  // Exiting early if the mouse button is not down
  if (!isDown) return;

  // Preventing default behavior of the mouse move event
  e.preventDefault();

  // Calculating the new scroll position based on the mouse movement
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});