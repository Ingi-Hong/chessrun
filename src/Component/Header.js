import { AppBar, Toolbar, Typography } from "@mui/material";
import CustomizedTabs from "./Navigation";
import { DRAWERWIDTH } from "./Contentvars";

function Header(){
    return(
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${DRAWERWIDTH}px)`, ml: `${DRAWERWIDTH}px` }}
      >
        <Toolbar >
          <CustomizedTabs></CustomizedTabs>
        </Toolbar>
      </AppBar>
    );
};

export default Header;