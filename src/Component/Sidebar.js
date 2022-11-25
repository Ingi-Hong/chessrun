import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MyTheme from "../Theme/Theme";
import { DRAWERWIDTH, TITLE } from "./Contentvars";
import Accordion from "./Accordion";
import SidebarContents from "./Sidebarcomponents/Sidebar-contents";

function Sidebar() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: DRAWERWIDTH,
            flexShrink: 1,
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
            {SidebarContents.map((item, i) => (
              <ListItem sx={{ width: "100%" }}>
                <Accordion title={item.title} content={item.content} />
              </ListItem>
            ))}
            {/* <Accordion title={"Creator"} content="poop"></Accordion> */}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Sidebar;
