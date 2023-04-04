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

  const geocodingEndpointUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const geocodingSearchParams = new URLSearchParams({
    q,
    limit: 1,
    appid: '8d3771c6e793b62ee4b37ce47a9792ae'
  });

  fetch(`${geocodingEndpointUrl}?${geocodingSearchParams.toString()}`)
    .then(response => response.json())
    .then(responseData => {
      const { lat, lon } = responseData[0];

      const forecastEndpointUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const forecastSearchParams = new URLSearchParams({
        lat,
        lon,
        appid: '8d3771c6e793b62ee4b37ce47a9792ae',
        units: 'imperial'
      });

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
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
})
