# 🌤️ React Weather App

A modern, clean weather dashboard built with **React**, using the
**OpenWeather API**.\
Users can search any location and view:

-   **6-day forecast**
-   **Current weather**
-   **High / Low temperatures**
-   **"Feels Like" temperature**
-   **Local sunrise & sunset times**
-   **Weather icons that update by condition**
-   **Country code + city name displayed**

------------------------------------------------------------------------


## 🚀 Features

### ✅ Search Any City

Users can enter a city name in the search bar. The app fetches and
updates weather data automatically.

### ✅ Today's Weather

Displays: - Day of the week - Full date - Temperature - Feels-like -
Weather description - Icon - High / Low - Local sunrise + sunset
converted by timezone offset

### ✅ 6-Day Forecast

Shows daily: - Date\
- Avg Temperature\
- Weather condition\
- Corresponding icon

### ✅ Error Handling

If the user enters an invalid location, the app shows a clear error
message.

------------------------------------------------------------------------

## 🧩 Project Structure

    src/
     ┣ components/
     ┃ ┣ SearchBar.jsx
     ┃ ┣ MiniWeatherBox.jsx
     ┃ ┗ MainWeatherBox.jsx
     ┣ context/
     ┃ ┗ AuthContext.jsx
     ┣ App.jsx
     ┗ index.jsx

------------------------------------------------------------------------

## 📦 Components Overview

### 🔍 **SearchBar.jsx**

-   Allows users to type and search for new locations\
-   Updates global state through `AuthContext`\
-   Clears input after searching

### 🌤 **MiniWeatherBox.jsx**

-   Displays the 6-day weather forecast\
-   Each day includes date, icon, avg temp, and weather condition\
-   Dynamically pulls icons based on OpenWeather's "main" weather value

### ☀️ **MainWeatherBox.jsx**

-   Shows detailed *current* weather info\
-   Converts sunrise & sunset using timezone offset\
-   Displays weather icon + description\
-   Shows high/low temperatures

### 🌎 **Weather.jsx**

-   Wrapper component that:
    -   Checks for errors
    -   Renders forecast + current weather components

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React**\
-   **Context API** for global state\
-   **OpenWeather API**\
-   **CSS** for styling\
-   **JavaScript (ES6+)**

------------------------------------------------------------------------

## 🔑 Environment Variables

Create a `.env` file in the root:

    VITE_WEATHER_API_KEY=your_api_key_here

------------------------------------------------------------------------

## ▶️ Running the Project

Install dependencies:

    npm install

Start the app:

    npm run dev

Open in browser:

    http://localhost:5173/

------------------------------------------------------------------------

## 📌 Future Improvements

-   Add geolocation ("Use my location")
-   Add hourly forecast
-   Add themes (dark/light)
-   Add animations for weather icons

------------------------------------------------------------------------
## LINK

https://weatherreactor.netlify.app/

