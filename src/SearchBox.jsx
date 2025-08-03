import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "db3d17d99cf552bcd88b29524d60e5d5";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description
    }
    return result;
  }

  let handleChange = (evt) => {
    setCity(evt.target.value);
  }

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setCity(""); 
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button type="submit" variant="contained">Search</Button>
      </form>
      </div>
  );
}
