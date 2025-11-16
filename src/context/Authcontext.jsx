import { createContext, useEffect, useState } from "react";
import { getWeather,getCurrentWeather } from "../data_fetching/getdata";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [location, setLocation] = useState(() => {
    return localStorage.getItem('Location') || 'New York';
  });
  const [weather, setWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [currentWeather,setCurrentWeather] = useState(null)
  const [error,setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!location) return; 
      setError(null);
  
      try {
        const data = await getWeather(location);
        const curr_data = await getCurrentWeather(location);
  
        setCurrentWeather(curr_data);
        setWeather(data);
  
        if (data?.list) {
          const dailySummary = getDailySummary(data.list);
          setDailyWeather(dailySummary);
        }
      } catch (error) {
        setError("ENTER A VALID LOCATION");
        console.error("Failed to fetch weather data:", error);
      }
    };
  
    fetchWeather();
  }, [location]);

  useEffect(()=>{
    localStorage.setItem('Location',location)

  },[location])

  const getDailySummary = (weatherList) => {
    if (!weatherList) return [];

    const dailyData = {};

    weatherList.forEach(({ dt_txt, main, weather }) => {
      const date = dt_txt.split(' ')[0];

      if (!dailyData[date]) {
        dailyData[date] = {
          temps: [],
          weatherConditions: [],
        };
      }
      dailyData[date].temps.push(main.temp);
      dailyData[date].weatherConditions.push(weather[0].main);
    });

    return Object.entries(dailyData).map(([date, data]) => {
      const avgTemp = data.temps.reduce((a, b) => a + b, 0) / data.temps.length;

      const freqMap = {};
      data.weatherConditions.forEach((cond) => {
        freqMap[cond] = (freqMap[cond] || 0) + 1;
      });
      const commonWeather = Object.entries(freqMap).reduce(
        (a, b) => (b[1] > a[1] ? b : a),
        ["", 0]
      )[0];

      return {
        date,
        avgTemp: avgTemp.toFixed(1),
        weather: commonWeather,
      };
    });
  };

  const value = {
    location,
    setLocation,
    weather,
    setWeather,
    dailyWeather,
    currentWeather, 
    setCurrentWeather,
    error,
    setError
  };



  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
