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
