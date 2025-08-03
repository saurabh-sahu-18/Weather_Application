import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URl =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={INIT_URl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
