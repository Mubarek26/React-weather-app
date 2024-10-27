import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [weatherData, setWeatherData] = useState(null);
  const key = "1a70e0c70551408c976113754242710";
  useEffect(() => {
    async function feachWeather() {
      if (!city) return;

      setError(null);
      setLoading(true);

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
        );
        if (!res.ok) throw new Error("city not found");
        const data = await res.json();

        if (res.error) {
          throw new Error(data.error.message);
        }

        setWeatherData(data);
        // setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    feachWeather();
  }, [city]);

  function handleInput(e) {
    setInputCity(e.target.value);
  }
  function onSearch() {
    setCity(inputCity);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      onSearch();
    }
  }

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      {/* Search Area */}
      <div className="search-container">
        <input
          type="text"
          id="city-input"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={(e) => handleInput(e)}
          onKeyPress={handleKeyPress}
        />
        <button id="search-button" onClick={onSearch}>
          Search
        </button>
      </div>

      {/* Current Weather Section */}
      {error && <Error error="error" />}
      {isLoading && <Loading />}
      {weatherData && weatherData.location && (
        <div className="weather-display">
          <h2 id="location">
            {weatherData.location.region}, {weatherData.location.country}
          </h2>
          <p id="description">Weather Description</p>
          <div className="temperature">
            <span id="temperature-value">{weatherData.current.temp_c}</span>
            <span>°C</span>
          </div>
          <div className="weather-details">
            <p>
              Humidity:{" "}
              <span id="humidity">{weatherData.current.humidity}</span>%
            </p>
            <p>
              Wind Speed:{" "}
              <span id="wind-speed">{weatherData.current.wind_kph}</span> km/h
            </p>
          </div>
        </div>
      )}

      {/* Forecast Section */}
    </div>
  );
}

function Loading() {
  const style = {
    fontSize: "24px", // Adjusts font size for visibility
    fontWeight: "bold", // Makes the text bold
    color: "#333", // Sets text color
    textAlign: "center", // Centers text
    marginTop: "20px", // Adds some space above the text
  };

  return (
    <div className="loading" style={style}>
      Loading...
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Error({ error }) {
  const style = {
    fontSize: "24px", // Adjusts font size for visibility
    fontWeight: "bold", // Makes the text bold
    color: "#333", // Sets text color
    textAlign: "center", // Centers text
    marginTop: "20px", // Adds some space above the text
  };

  return (
    <div className="loading" style={style}>
      {error}
    </div>
  );
}

export default App;
