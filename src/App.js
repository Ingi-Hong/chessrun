import "./App.css";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Contents from "./Component/Contents-videos";
import { Box, ThemeProvider } from "@mui/material";
import MyTheme from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Box sx={{ display: "flex", backgroundColor: "#F8F6F0" }}>
        <Header />
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            marginTop: "100px",
            marginLeft: "50px",
            marginRight: "50px",
            width: "100%"
          }}
          alignContent="center"
          justifyContent="center"
        >
          <Contents />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
