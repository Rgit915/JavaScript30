// Function to debounce the scroll event
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Select all elements with the 'slide-in' class
const sliderImages = document.querySelectorAll('.slide-in');

// Function to check if the images should slide in
function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // Calculate the point where the image should slide in
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // Calculate the bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // Check if the image is half shown and not scrolled past
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    // Add or remove 'active' class based on the conditions
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

// Add event listener for scroll with debouncing
window.addEventListener('scroll', debounce(checkSlide));
