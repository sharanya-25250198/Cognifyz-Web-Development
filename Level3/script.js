// Replace with your OpenWeather API key
const apiKey = "f2eab3a7862c2256715ce0d36b1826c4";

async function getWeather(){

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(apiUrl);

        const data = await response.json();

        if(data.cod === "404"){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText =
        data.name;

        document.getElementById("temperature").innerText =
        `Temperature: ${data.main.temp}°C`;

        document.getElementById("description").innerText =
        `Weather: ${data.weather[0].description}`;

        document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
        `Wind Speed: ${data.wind.speed} km/h`;

        document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

    catch(error){

        alert("Error fetching weather data");

    }

}