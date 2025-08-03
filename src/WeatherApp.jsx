import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let UpdateInfo = (result) => {
    setWeatherInfo(result);
  }

  return (
    <div style={{textAlign: "center"}}>
        <h2>Weather Application</h2>
        <SearchBox updateInfo={UpdateInfo}/>
        <InfoBox info={weatherInfo} />
    </div>
  );
}
