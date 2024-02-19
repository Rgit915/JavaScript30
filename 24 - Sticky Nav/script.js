// Select the navigation element with id 'main'
const nav = document.querySelector('#main');

// Get the initial offsetTop position of the navigation
const topOfNav = nav.offsetTop;

// Function to fix the navigation on scroll
function fixNav() {
  // Check if the window has scrolled past the initial position of the navigation
  if (window.scrollY >= topOfNav) {
    // Add padding to the body equal to the height of the navigation to prevent content overlap
    document.body.style.paddingTop = nav.offsetHeight + 'px';

    // Add a class to the body for styling changes when navigation is fixed
    document.body.classList.add('fixed-nav');
  } else {
    // Reset padding when the window is scrolled above the initial position
    document.body.style.paddingTop = 0;

    // Remove the class for styling changes when navigation is not fixed
    document.body.classList.remove('fixed-nav');
  }
}

// Event listener for the scroll event to trigger the fixNav function
window.addEventListener('scroll', fixNav);
