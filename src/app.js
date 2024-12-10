function refreshWeather(response) {
  let temperatureElement = document.querySelector("#app-temp-value");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#app-city");

  city.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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

