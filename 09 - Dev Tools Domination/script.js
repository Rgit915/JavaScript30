const cats = [{ name: 'Whiskers', age: 4 }, { name: 'Mittens', age: 6 }];

const changeColor = () => {
  const container = document.querySelector('.wrapper');

  // Set gradient color
  container.style.background = 'linear-gradient(to right, #ffcc00, #ff99cc)';
  container.style.color = 'white';
}