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
      return <h1>Loading current weather...</h1>;
    }


    const sunriseUTC = currentWeather.sys.sunrise * 1000; // ms UTC timestamp
    const sunsetUTC = currentWeather.sys.sunset * 1000;
    
    const timezoneOffsetSeconds = currentWeather.timezone; // seconds offset from UTC
    
    // Calculate local milliseconds for the location
    const sunriseLocalMs = sunriseUTC + timezoneOffsetSeconds * 1000;
    const sunsetLocalMs = sunsetUTC + timezoneOffsetSeconds * 1000;
    
    const sunriseLocal = new Date(sunriseLocalMs);
    const sunsetLocal = new Date(sunsetLocalMs);
    
    // Format times with user's locale, no forced timezone
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    
    const sunriseStr = sunriseLocal.toLocaleTimeString(undefined, options);
    const sunsetStr = sunsetLocal.toLocaleTimeString(undefined, options);
  
  
    const iconSrc = weatherIcons[currentWeather.weather[0].main] || weatherIcons["Clear"];

  
  
    return (
      <div className="main-weather-container">
  
    
        <div className="main-left">
          <h1>{days[day]}</h1>
          <h2>{months[month]} {date}, {year}</h2>
          <h3>Temp: {currentWeather.main.temp}°F</h3>
          <p>Feels Like: {currentWeather.main.feels_like}°F </p>
  
          <img src={iconSrc} alt={currentWeather.weather[0].description} style={{width:"80px"}}/>
          <p>{currentWeather.weather[0].description}</p>
        </div>
  
        <div className="main-right">
        <h4>High: {currentWeather.main.temp_max}°F</h4>
        <h4>Low: {currentWeather.main.temp_min}°F</h4>

        <h4>sunrise: {sunriseStr} EST</h4>
        <h4>sunset: {sunsetStr} EST</h4>
        </div>
      </div>
    );
  }
  