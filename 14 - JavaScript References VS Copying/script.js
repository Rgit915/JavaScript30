// Copying Arrays

const players1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy1 = players1.slice();
playersCopy1.push('NewPlayer1');
console.log(players1, playersCopy1);

const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy2 = [].concat(players2);
playersCopy2.push('NewPlayer2');
console.log(players2, playersCopy2);

const players3 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy3 = [...players3];
playersCopy3.push('NewPlayer3');
console.log(players3, playersCopy3);


// With Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// Method 1: Using Object.assign() to create a copy (reference)
const personCopy1 = Object.assign({}, person);
personCopy1.age = 30;
console.log(person, personCopy1);

// Method 2: Using the spread operator (...) to create a copy (reference)
const personCopy2 = { ...person };
personCopy2.age = 25;
console.log(person, personCopy2);

