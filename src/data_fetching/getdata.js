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




console.log(await getWeather("Bronx"))