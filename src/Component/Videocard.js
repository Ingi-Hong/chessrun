import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Link
} from "@mui/material";
import { CARDMAXWIDTH, CARDHEIGHT } from "./Contentvars";

function Videocard(props) {
  let color = "#FAF9F6";
  let textColor = "black";

  if (props.startAs === "black") {
    color = "#212121";
    textColor = "#FAF9F6";
  }

  console.log(props.link)

  return (
    <Card
      sx={{ maxWidth: CARDMAXWIDTH, backgroundColor: color, color: textColor }}
    >
      <CardActionArea component={Link} href={props.link} target="_blank">

        <CardMedia
          component="img"
          alt={props.name}
          height={CARDHEIGHT}
          image={props.thumbnail}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {props.creator}
          </Typography>
          <Typography variant="body2">
            {props.elo} rating
            <br />
            Plays as {props.startAs}
            <br />
            {props.opening}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Videocard;
