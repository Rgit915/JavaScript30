// Select the canvas element from the HTML document
const canvas = document.querySelector('#draw');

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the initial stroke style, line join, and line cap properties
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Initialize variables for tracking drawing state and last position
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Function to handle the drawing process
function draw(e){
  // If not drawing, exit the function
  if (!isDrawing) return;

  // Log the mouse event for debugging purposes
  console.log(e);

  
}

// Event listeners for mouse movements and interactions
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
