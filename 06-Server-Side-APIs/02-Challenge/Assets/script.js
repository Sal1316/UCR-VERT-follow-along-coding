

var apiKey = "2b968bda86e14018b6589f7ec132923f";


// latLonApi("San Diego");
// fetchWeatherForcast('Long Beach');

// Event Handlers:
var searchBtnEl = $("#searchBtn");
searchBtnEl.on("click", onSeachBtnClick);

// Main Function:

function onSeachBtnClick() {

      var cityValue = $("#cityInput").val();
      console.log("cityValue: ", cityValue);
      latLonApi(cityValue);
      fetchWeatherForcast(cityValue);

}

function latLonApi(city) {
      var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      fetch(url)
            .then(function (response) {
                  return response.json(); // need to have the return here so we can use the next .then to get the response data.
            })
            .then(function (data) {
                  console.log("latitude and longitude Data: ", data);

                  fiveDayForecast(data[0].lat, data[0].lon);
            });
}

function fiveDayForecast(lat, lon) {
      var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

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
                  console.log("fiveDayForecast", data);
            });
}

function fetchWeatherForcast(query) { // fx get the weather forecast json object and passes it to renderWeather fx.
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&per_page=5&appid=${apiKey}`;
      var url2 = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
      // var url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={5}&appid=${apiKey}`; // use this one.

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
                  console.log("Forecast Data:", data);
                  renderWeather(data);
            });
}

function renderWeather(forecast) {// assigns the json objects values, to their respective element on the single current weather day.
      console.log("JSON forecast: ", forecast);
      var resultsContainer = document.getElementById("currentWeather");

      var city = document.createElement("h2"); // js or jquery preffered
      city.textContent = forecast.name;
      city.classList.add("cityDate"); // adding cityDate class
      resultsContainer.append(city); // append to html.

      var timeStamp = forecast.dt;
      console.log("timestamp: ", timeStamp)
      var dateObj = dayjs.unix(timeStamp);
      var formattedDate = dateObj.format('MM/DD/YYYY, h:mm:ss a');
      // var titleHeader =document.getElementByClassName('cityDate');
      resultsContainer.append(formattedDate); // add next to h2.

      var temp = document.createElement("p");
      temp.textContent = "Temp: " + forecast.main.temp + " F";
      resultsContainer.append(temp);
      
      var wind = document.createElement("p");
      wind.textContent = "Wind: " + forecast.wind.speed + " mph";
      resultsContainer.append(wind);

      var humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + forecast.main.humidity + " %";
      resultsContainer.append(humidity);
}

// use jquery empty fx.

// Helper functions:
// (fetch function for city on search: - need to call the api from the search button.

// fetch for the city on city button press.

// icon function: - displays icons based on temp || clouds || rain

// click handler for the buttons: - load the data from the api request

// search city weather input box.  - when press search, it searches for the city, name and displays instead of the city buttons.

// saveToLocal fx - saves the data to local

// getFromLocal fx - gets the data from local
