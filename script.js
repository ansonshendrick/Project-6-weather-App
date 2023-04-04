const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weather = document.querySelector('.weather');
const weatherInfo = document.querySelector('.weather-info');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

search.addEventListener('click', () => {
  const q = document.querySelector('.search-box input').value;

  // Set up the OpenWeatherMap Geocoding API endpoint and search parameters
  const geocodingEndpointUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const geocodingSearchParams = new URLSearchParams({
    q,
    limit: 1,
    appid: '8d3771c6e793b62ee4b37ce47a9792ae'
  });

  // Make a GET request to the OpenWeatherMap Geocoding API and parse the response
  fetch(`${geocodingEndpointUrl}?${geocodingSearchParams.toString()}`)
    .then(response => response.json())
    .then(responseData => {
      // Extract the latitude and longitude from the OpenWeatherMap Geocoding API response
      const { lat, lon } = responseData[0];

      // Set up the OpenWeatherMap Forecast API endpoint and search parameters
      const forecastEndpointUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const forecastSearchParams = new URLSearchParams({
        lat,
        lon,
        appid: '8d3771c6e793b62ee4b37ce47a9792ae',
        units: 'imperial'
      });

      // Make a GET request to the OpenWeatherMap Forecast API and parse the response
      fetch(`${forecastEndpointUrl}?${forecastSearchParams.toString()}`)
        .then(response => response.json())
        .then(json => {
          temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
          description.innerHTML = `${json.weather[0].description}`;
          humidity.innerHTML = `${json.main.humidity}%`;
          wind.innerHTML = `${parseInt(json.wind.speed)}mph`;

          weather.style.display = '';
            weatherInfo.style.display = '';
            weather.classList.add;
            weatherInfo.classList.add;
            container.style.height = '605px';

          // Extract any relevant data from the OpenWeatherMap Forecast API response and return it to the user
          // ...
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
})
