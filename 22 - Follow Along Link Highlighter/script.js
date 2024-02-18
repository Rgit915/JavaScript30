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

  // Set the width, height, and position of the highlight span
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

// Add event listener to each link for highlighting on mouseenter
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
