import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";


export default function MainWeatherBox() {
    const { currentWeather, location } = useContext(AuthContext);
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
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
  
    if (!currentWeather || !currentWeather.weather) {
      return <p>Loading current weather...</p>;
    }
  
    const iconSrc = weatherIcons[currentWeather.weather[0].main] || weatherIcons["Clear"];
  
    return (
      <div className="main-weather-container">
    
        <div className="main-left">
        <button onClick={() => { console.log(currentWeather) }}>log weather</button>
        <button onClick={() => { console.log(today) }}>log date</button>
  
          <h1>{days[day]}</h1>
          <h2>{months[month]} {date}, {year}</h2>
          <h3>Temp: {currentWeather.main.temp}°F</h3>
  
          <img src={iconSrc} alt={currentWeather.weather[0].description} />
        </div>
  
        <div className="main-right">
        <h4>High: {currentWeather.main.temp_max}°F</h4>
        <h4>Low: {currentWeather.main.temp_min}°F</h4>
        </div>
      </div>
    );
  }
  