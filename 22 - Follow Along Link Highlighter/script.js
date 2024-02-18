// Select all anchor elements on the page
const triggers = document.querySelectorAll('a');

// Create a span element for highlighting
const highlight = document.createElement('span');
highlight.classList.add('highlight'); // Add 'highlight' class to the span
document.body.append(highlight); // Append the highlight span to the body

// Function to highlight the link on mouseenter
function highlightLink() {
  // Get position and dimensions of the hovered link
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords); // Log link coordinates for debugging
  // Create an object to store the dimensions and position of the hovered link
  const coords = {
    width: linkCoords.width,            // Width of the link
    height: linkCoords.height,          // Height of the link
    top: linkCoords.top + window.scrollY, // Top position of the link, accounting for vertical scrolling
    left: linkCoords.left + window.scrollX // Left position of the link, accounting for horizontal scrolling
  };

  // Set the width, height, and position of the highlight span
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Add event listener to each link for highlighting on mouseenter
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
