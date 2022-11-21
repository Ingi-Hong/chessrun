import { createTheme } from "@mui/material";

const MyTheme = createTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#000000',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },

    typography:{
        icon:{

        }
    }
  });


export default MyTheme;