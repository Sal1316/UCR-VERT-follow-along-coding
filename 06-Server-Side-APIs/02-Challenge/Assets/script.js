/*
// var cordinatesTestArr = [
//   {
//     city: "Los Angeles",
//     latitude: 233456,
//     longitude: 454522,
//   },
//   {
//     city: "San Diego",
//     latitude: 5678856,
//     longitude: 87686722,
//   },
//   {
//     city: "London",
//     latitude: 51.5156177,
//     longitude: -0.0919983,
//   },
// ];
// var lat = cordinatesTestArr[2].latitude;
// var lon = cordinatesTestArr[2].longitude;

// var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// var url2 = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=${apiKey}`;
// var url3 = `https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${apiKey}`;
*/

fetchWeather('Perris');

// Event Handlers:

// Main Function:
function renderWeather(weather) {
      // weather param is the JSON returned object.
      console.log("JSON weather: ", weather);

      var resultsContainer = document.getElementById("currentWeather");
      var city = document.createElement("h2");
      city.textContent = weather.name; //'Zocca'
      resultsContainer.append(city + datejs(MMMM)); // append to html.

      var temp = document.createElement("p");
      temp.textContent = "Temp: " + weather.main.temp + " F";
      resultsContainer.append(temp);

      var wind = document.createElement("p");
      wind.textContent = "Wind: " + weather.wind.speed + " mph";
      resultsContainer.append(wind);

      var humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + weather.main.humidity + " %";
      resultsContainer.append(humidity);
}


function fetchWeather(query) {
      var apiKey = "2b968bda86e14018b6589f7ec132923f";
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&per_page=5&appid=${apiKey}`;

      fetch(url, {
            method: "GET", //GET is the default.*GET, POST, PUT, DELETE, etc.
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            units: "imperial",
      })
            .then(function (response) {
                  return response.json(); // need to have the return here so we can use the next .then to get the response data.
            })
            .then(function (data) {
                  // console.log(data);
                  renderWeather(data);
            });
}

// Helper functions:
// (fetch function for city on search: - need to call the api from the search button.

// fetch for the city on city button press.

// icon function: - displays icons based on temp || clouds || rain

// click handler for the buttons: - load the data from the api request

// search city weather input box.  - when press search, it searches for the city, name and displays instead of the city buttons.

// saveToLocal fx - saves the data to local

// getFromLocal fx - gets the data from local
