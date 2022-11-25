import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { CSSTransition } from "react-transition-group";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component="div"
        sx={{ display: "flex", border: "1px black solid" }}
        onClick={() => setIsActive(!isActive)}
      >
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Box sx={{ width: "100%", border: "1px green solid" }}></Box>
        <Typography sx={{ transition: "2s" }}>
          {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Typography>
      </Box>
      {isActive && <Box>{content}</Box>}
    </Box>
  );
};

export default Accordion;
