// Define API Endpoint:
// Identify the API endpoint that provides information about cities or states.
const citiesAPI = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Fetch Data:
// Use the fetch API to make an HTTP request to the identified endpoint.
fetch(citiesAPI)
  .then(response => {
    // Check if the HTTP response is successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Process the fetched data and store it in the cities array
    cities.push(...data);
    // Log the populated cities array
    console.log(cities);
  })
  .catch(error => {
    // Handle errors during the fetch operation
    console.error('Error fetching data:', error);
  });

// Function to filter cities based on the search term
function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}


//Function to display matching cities and population
function displayMatches(){
  //Get matching cities based on the input value
  const matchArray = findMatches(this.value, cities)

  //Generate HTML for matching cities
 const html = matchArray.map((place) => {
  const regex = new RegExp(this.value, 'gi');
  const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
  const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
  return `
  <li>
  <span class="name">${cityName}, ${stateName}</span>
  <span class="population">${place.population}</span>
  </li>
  `;
 }).join('');

 //Display the generated HTML in the suggestions container
 suggestions.innerHTML = html;
}

// Select the HTML element with the class 'search' and store it in the searchInput variable.
const searchInput = document.querySelector('.search');

// Select the HTML element with the class 'suggestions' and store it in the suggestions variable.
const suggestions = document.querySelector('.suggestions');


//Event listener for input changes to trigger displayMatches
searchInput.addEventListener('input', displayMatches);


