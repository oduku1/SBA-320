import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";




export default function MiniWeatherBox(){
    const {location,weather} = useContext(AuthContext)
    return(<div>
        <h2>{location}</h2>

    
    </div>)
}