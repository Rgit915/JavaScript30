// Initialize an array to track pressed keys and set the secret code
const pressed = [];
const secretcode = 'wesbos';

// Event listener for keypress on the window
window.addEventListener('keypress', (e) => {
  // Log the pressed key
  console.log(e.key);

  // Add the pressed key to the array and maintain the length
  pressed.push(e.key);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);

  // Check if the pressed keys match the secret code
  if (pressed.join('').includes(secretcode)) {
    console.log('Gotcha!');
    cornify_add(); // function for a fun action (e.g., adding unicorns)
  }

  // Log the current array of pressed keys
  console.log(pressed);
});
