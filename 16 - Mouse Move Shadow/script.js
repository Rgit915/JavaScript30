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
  
// Setting up the text shadow based on mouse movement
const walk = 300; // 100px
const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / height * walk) - (walk / 2));

// Applying the text shadow to the 'h1' element with dynamic values
text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
                        ${xWalk * -1}px ${yWalk}px 0 rgba(167, 15, 255, 0.7),
                        ${yWalk}px ${xWalk * -1}px 0 rgba(110, 255, 11, 0.7),
                        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 90, 255, 0.7)`;
text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(167,15,255,0.7),
${yWalk}px ${xWalk * -1}px 0 rgba(110,255,11,0.7),
${yWalk * -1}px ${xWalk}px 0 rgba(0,90,255,0.7)
`;
}

// Adding a 'mousemove' event listener to the '.hero' element, which triggers the 'shadow' function
hero.addEventListener('mousemove', shadow);
