import { useContext } from "react";
import { AuthContext } from "./Authcontext";


const {currentWeather} = useContext(AuthContext)

console.log(currentWeather)