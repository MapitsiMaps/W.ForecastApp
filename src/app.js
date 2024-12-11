function refreshWeather(response) {
  let temperatureElement = document.querySelector("#app-temp-value");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#app-city");
  let condition = document.querySelector("#condition");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#speed");
  let dayTime = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);


  console.log(response.data);

  city.innerHTML = response.data.city;
  dayTime.innerHTML = formatDate(date);
  condition.innerHTML = `${response.data.condition.description}`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}


function searchCity(city) {
    let apiKey = "965c3f88bb31tcd6d0o207b4a96b304a";
    let apiUrl = 
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
    
function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}
    
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Mokopane");

