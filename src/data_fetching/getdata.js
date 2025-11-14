import dotenv from "dotenv";


const getCoordinates = async (query) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=1b811f0c241f0e039a74b47627121411`
  );
  const data = await response.json();
  return data; 
};

export const getWeather = async (query = "Bronx") => {
  const coords = await getCoordinates(query);

  
  const { lat, lon } = coords[0];

 
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=1b811f0c241f0e039a74b47627121411`
  );

  const data = await response.json();
  return data;
};


export const getCurrentWeather = async (query = "Bronx") => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=1b811f0c241f0e039a74b47627121411`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getCurrentWeather error:", error);
    return null;  
  }
};


console.log(await getWeather("Bronx"))