 // ## Array Cardio Day 2

 const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// Create a new Date object to represent the current date and time
const currentDate = new Date();

// Extract the current year from the Date object
const currentYear = currentDate.getFullYear();

// Use the some method to check if there is at least one person who is 19 years old or older
const isAdult = people.some((person) => currentYear - person.year >= 19);

// Log the result to the console
console.log("Is at least one person 19 or older? ", isAdult);

// Array.prototype.every() // is everyone 19 or older?
// Use the every method to check if everyone is 19 years old or older
const allAdult = people.every((person) => currentYear - person.year >= 19);

// Log the result to the console
console.log("Is everyone 19 or older? ", allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((comment)=> comment.id === 823423 )
console.log(`The comment with id 823423 is: "${findComment.text}"`)

// Array.prototype.findIndex()
// Find the comment with this ID
const Index = comments.findIndex((comment)=> comment.id === 823423)
console.log(`The index of comment with id 823423 is: "${Index}"`)

// delete the comment with the ID of 823423
comments.splice(Index, 1);
console.table(comments)