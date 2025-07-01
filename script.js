// ✅ Your OpenWeatherMap API key
const apiKey = "b1b15e88fa797225412429c1c50c122a1";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city name.");
      }
      return response.json();
    })
    .then(data => {
      const resultHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>☁ Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>📝 Description:</strong> ${data.weather[0].description}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>💨 Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = resultHTML;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
