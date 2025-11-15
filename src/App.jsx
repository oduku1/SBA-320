import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContext } from './context/Authcontext'
import SearchBar from './Components/SearchBar'
import Weather from './Components/Weather'

function App() {
  
  return (
    <>
        <SearchBar/>
        <Weather/>
    </>
 
  
  )
}

export default App
