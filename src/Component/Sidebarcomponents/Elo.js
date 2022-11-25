import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return {value} + 'elo';
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <Box sx={{ width: "95%" }}>
      <Slider
        getAriaLabel={() => 'Elo'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={3000}
      />
    </Box>
  );
}