const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove leading "The," "An," or "A" and trim whitespaces
const removeArticle = band => band.replace(/^(The|An|A)\s+/i, '').trim();

// Sorting the bands without "The," "An," or "A" using localeCompare
const sortedBands = bands.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Selecting the HTML element with the id 'bands'
const bandsListElement = document.querySelector('#bands');

// Generating list items for each sorted band
const bandListItems = sortedBands.map(band => `<li>${band}</li>`);

// Adding the list items to the HTML element
bandsListElement.innerHTML = bandListItems.join('');