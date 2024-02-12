// Selecting the '.hero' element from the DOM
const hero = document.querySelector('.hero');

// Selecting the 'h1' element within the '.hero' element
const text = hero.querySelector('h1');

// Function to create a shadow effect based on mouse movement
function shadow(e){
  // Destructuring assignment to get the width and height of the '.hero' element
  const { offsetWidth: width, offsetHeight: height} = hero;

  // Destructuring assignment to get the X and Y coordinates of the mouse pointer
  let {offsetX: x, offsetY: y } = e;

  // Adjusting the X and Y coordinates if the event target is not the same as the '.hero' element
  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // Logging the X and Y coordinates to the console
  console.log(x, y);
}

// Adding a 'mousemove' event listener to the '.hero' element, which triggers the 'shadow' function
hero.addEventListener('mousemove', shadow);
