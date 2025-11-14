import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"




export default function MainWeatherBox(){
    const {currentWeather} = useContext(AuthContext)
    return(
        <div>
                <button onClick={()=>{console.log(currentWeather)}}>Click</button>

        
        </div>
    
    

)
    
}