import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  FormControl,
} from "@mui/material";
import React from "react";
import RangeSlider from "./Elo";

const options = [
  {
    title: "Creator",
    content: (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Chessbrah"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Daniel Naroditsky"
        />
      </FormGroup>
    ),
  },

  {
    title: "Elo",
    content: (
      <Box sx={{  }}>
        <RangeSlider />
      </Box>
    ),
  },

  {
    title: "Opening",
    content: (
      <Box>FILL</Box>
    )
  },

  {
    title: "Plays as",
    content: (
      <FormControl>
    <FormControlLabel value="white" control={<Radio />} label="White" />
    <FormControlLabel value="black" control={<Radio />} label="Black" />
    <FormControlLabel value="anyColor" control={<Radio />} label="Any Color" />
</FormControl>
    )
  }
];

export default options;
