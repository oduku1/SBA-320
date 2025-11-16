import { useContext } from "react";
import MiniWeatherBox from "./MiniWeatherBox";
import MainWeatherBox from "./MainWeatherBox";
import { AuthContext } from "../context/Authcontext";

export default function Weather() {
  const { error } = useContext(AuthContext);

  if (error) return <h1>{error}</h1>
  

  return (
    <div>
      <MiniWeatherBox />
      <MainWeatherBox />
    </div>
  );
}
