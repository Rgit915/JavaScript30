const animals = [{ name: 'Whiskers', age: 4 }, { name: 'Mittens', age: 6 }];

    const runTrick = (trickNumber) => {
      switch (trickNumber) {
        case 1:
          console.log('1. Regular Text: Just simple text output.');
          break;
        case 2:
          console.log(`2. Interpolated: My cat is ${animals[0].name}, and she is ${animals[0].age} years old.`);
          break;
        case 3:
          console.log('%c3. Styled Text: Check Console for Styled Output', 'background: linear-gradient(to right, #ffcc00, #ff99cc); color: transparent; font-size: 20px;');
          break;
        case 4:
          console.warn('4. Warning: Check Console for Warning');
          break;
        case 5:
          console.error('5. Error: Check Console for Error');
          break;
        case 6:
          console.info('6. Information: Check Console for Information');
          break;
        case 7:
          console.assert(animals.length === 2, '7. Testing: Check Console for Assertion');
          break;
        case 8:
          console.clear();
          console.log('8. Clearing Console: Console will be cleared.');
          break;
        case 9:
          console.log('9. Viewing DOM Elements: Check Console for DOM Element', document.querySelector('p'));
          break;
        case 10:
          animals.forEach(animal => {
            console.groupCollapsed(`10. Grouping Together: ${animal.name}`);
            console.log(`- Name: ${animal.name}`);
            console.log(`- Age: ${animal.age}`);
            console.groupEnd();
          });
          break;
        case 11:
          console.count('11. Counting: Check Console for Click Count');
          console.count('11. Counting: Check Console for Click Count');
          console.count('11. Counting: Check Console for Click Count');
          break;
        case 12:
          console.time('12. Timing: Check Console for Fetching Data Time');
          fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
              console.timeEnd('12. Timing: Check Console for Fetching Data Time');
              console.log('Fetched Data:', data);
            });
          break;
        default:
          break;
      }
    };