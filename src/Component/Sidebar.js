import {
  Box,
  Drawer,
  List,
  ListItem,
  Toolbar,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import data from "./Sidebarcontent";
import { TITLE, DRAWERWIDTH } from "./Contentvars";

function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: DRAWERWIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWERWIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Typography component="h1" variant="h6">
                {TITLE}
              </Typography>
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {data.map((item, i) => (
              <ListItem key={i}>{item.name}</ListItem>
            ))}
            {console.log(data)}
          </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
