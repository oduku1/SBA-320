import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"




export default function MainWeatherBox(){
    const {currentWeather,location} = useContext(AuthContext)
    const today = new Date()
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate()
    const day  = today.getDay()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
    return(
        <div>
                <button onClick={()=>{console.log(currentWeather)}}>log weather</button>
                <button onClick={()=>{console.log(today)}}>log date</button>

                <div className="main-left">
                <h3>{days[day]}</h3>
                <h2>{month} {date}, {year}</h2>

                </div>
                

        
        </div>
    
    

)
    
}