// Axios is a popular NPM package used for preforming API requests. npm i axios@1.4.0 i believe.
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom.
const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;


/*NOTES:
-NOT SURE WHAT VARIABLE HOLDS THE RETURN FROM THE AXIOS CALL? the search function as a whole is returning the Promise returned by the axios.get(). 
This is bc the search(query) itself is a proomise that gets returned with the value of the axiox.get() call.

*/ 