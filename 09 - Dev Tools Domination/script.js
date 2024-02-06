const cats = [{ name: 'Whiskers', age: 4 }, { name: 'Mittens', age: 6 }];

const changeColor = () => {
  const container = document.querySelector('.wrapper');

  // Set gradient color
  container.style.background = 'linear-gradient(to right, #ffcc00, #ff99cc)';
  container.style.color = 'white';
}

// Console Tricks
console.log('Regular Text');
console.log('Interpolated: My cat is %s, and she is %d years old.', cats[0].name, cats[0].age);
console.log('%cStyled Text', 'background: linear-gradient(to right, #ffcc00, #ff99cc); color: transparent; font-size: 20px;');
console.warn('This is a warning!');
console.error('This is an error!');
console.info('This is some information.');