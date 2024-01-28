// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const born = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;

});
console.log("Inventors born in 1500's:");
console.table(born);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstLastName = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;

});
console.log("Inventors first and last names:");
console.table(firstLastName);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((a, b) =>{
  a.year > b.year ? 1: -1 ;
})

console.log("Sort Oldest to Youngest inventors:");
console.table(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// Calculate the total number of years all the inventors lived together
const numberOfYears = inventors.reduce((acc, currentValue) => {
  return acc + (currentValue.passed - currentValue.year);
}, 0);

// Display the result in the console
console.log(`All the inventors lived all together for ${numberOfYears} years.`);
// 5. Sort the inventors by years lived
const sortedByLived = inventors.sort((a, b) => {
  // Calculate the years lived for each inventor
  const yearsLivedA = a.passed - a.year;
  const yearsLivedB = b.passed - b.year;

  // Compare the years lived and return a value for sorting
  return yearsLivedA > yearsLivedB ? -1 : 1;
});

// Display the sorted array in the console
console.log("Sort by years lived:")
console.table(sortedByLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// // Get the element with class 'mw-category'
// const category = document.querySelector('.mw-category');

// // Create an array of all <a> elements within the category
// const links = Array.from(category.querySelectorAll('a'));

// // Extract the boulevards containing 'de' from the list of links
// const de = links.map(link => link.textContent).filter(boulevards => boulevards.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastname = people.sort((a, b) => {
  // Destructure the names into last and first names
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');

  // Compare last names and return a value for sorting
  return aLast > bLast ? 1 : -1;
});

// Display the sorted array in the console
console.log(sortedByLastname);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instancesCount = data.reduce((accumulator, currentValue) => {
  // If the current value is not in the accumulator, initialize its count to 1
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
  } else {
    // If the current value is already in the accumulator, increment its count
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

console.table(instancesCount);
