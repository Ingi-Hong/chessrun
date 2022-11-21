import Videocard from "./Videocard";
import { videos } from "./Videos";
import { Box, Unstable_Grid2 as Grid2 } from "@mui/material";

export default function Content() {
  return (
    <Box
    sx={{ m: "10", width: "95%"}}
    display="flex"
    justifyContent="center"
    alignContent="center"
    >
    <Grid2
      container
      rowSpacing={1}
      columnSpacing={{ md: 3, sm: 2, xs: 1 }}
      display="flex"
      justifyContent={{md: "left", sm: "center"}}
      alignContent="center"
    >
        {videos.map((item, i) => (
          <Grid2 key={i}>
            <Videocard
              key={i}
              creator={item.creator}
              thumbnail={item.thumbnail}
              elo={item.elo}
              startAs={item.startAs}
              opening={item.opening}
              link={item.link}
            >
              {item.name}
            </Videocard>
          </Grid2>
        ))}
    </Grid2>
    </Box>
  );
}

// creator: "Daniel Naroditsky",
// thumbnail: "https://i.ytimg.com/vi/h-9MlTRN-fk/maxresdefault.jpg",
// startAs: "white",
// elo: "900"
