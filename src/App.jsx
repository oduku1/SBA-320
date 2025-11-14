import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContext } from './context/Authcontext'
import MiniWeatherBox from './Components/MiniWeatherBox'
import SearchBar from './Components/SearchBar'

function App() {
  
  return (
    <>
        <SearchBar/>
        <MiniWeatherBox/>
    </>
 
  
  )
}

export default App
