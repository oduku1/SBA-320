import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function WeatherChart() {
  const { weather } = useContext(AuthContext);

  // Next 24 hours = first 8 entries
  const next24Hours = weather?.list?.slice(0, 8) || [];

  const hourlyData = next24Hours.map(item => item.main.temp);

  const labels = next24Hours.map(item => {
    const date = new Date(item.dt * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true
    });
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°F)",
        data: hourlyData,
        borderColor: "yellow",
        backgroundColor: "rgba(255, 215, 0, 0.3)",
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        tension: 0.4 // smooth curve
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
        mode: "nearest",
        intersect: false,
      },
      plugins: {
        tooltip: {
          enabled: true,
        },
        legend: {
          labels: {
            color: "#fff",
          }
        }
      },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { display: false }
      },
      y: {
        ticks: { 
            color:"#fff",
            callback: function(value){
                return value +  "°"
            }
        },
        grid: { display: false }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div style={{ height: "150px", background: "transparent" }}>
      <Line data={data} options={options} />
    </div>
  );
}