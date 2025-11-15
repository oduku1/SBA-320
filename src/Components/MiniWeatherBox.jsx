import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

// Map weather main descriptions to icon URLs (using OpenWeather's icons here for simplicity)
const weatherIcons = {
  Clear: "http://openweathermap.org/img/wn/01d@2x.png",
  Clouds: "http://openweathermap.org/img/wn/03d@2x.png",
  Rain: "http://openweathermap.org/img/wn/09d@2x.png",
  Drizzle: "http://openweathermap.org/img/wn/09d@2x.png",
  Thunderstorm: "http://openweathermap.org/img/wn/11d@2x.png",
  Snow: "http://openweathermap.org/img/wn/13d@2x.png",
  Mist: "http://openweathermap.org/img/wn/50d@2x.png",
  Smoke: "http://openweathermap.org/img/wn/50d@2x.png",
  Haze: "http://openweathermap.org/img/wn/50d@2x.png",
  Dust: "http://openweathermap.org/img/wn/50d@2x.png",
  Fog: "http://openweathermap.org/img/wn/50d@2x.png",
  Sand: "http://openweathermap.org/img/wn/50d@2x.png",
  Ash: "http://openweathermap.org/img/wn/50d@2x.png",
  Squall: "http://openweathermap.org/img/wn/50d@2x.png",
  Tornado: "http://openweathermap.org/img/wn/50d@2x.png",
};

export default function MiniWeatherBox() {
  const { location, dailyWeather,currentWeather } = useContext(AuthContext);

  return (
    <>

    {currentWeather && <h1>{location}, {currentWeather.sys.country}</h1>}
      <div className="daily-container">
        {dailyWeather?.map(({ date, avgTemp, weather }) => (
          <div key={date} className="day-box">
            <h3>
              <strong>{date}</strong>
            </h3>
            <img
              src={weatherIcons[weather] || weatherIcons["Clear"]}
              alt={weather}
              style={{ width: "60px", height: "60px" }}
            />
            <p>Avg Temp: {avgTemp}°F</p>
            <p>{weather}</p>
          </div>
        ))}
      </div>
    </>
  );
}