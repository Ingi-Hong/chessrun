import { Typography, Box } from "@mui/material";
import { TITLE } from "./Contentvars";

export default function About(){
    return(
        <Box>
            <Typography
            variant="h1"
            >
                What is {TITLE}? 
            </Typography>


            <Typography
            variant="b1"
            >
                {TITLE} allows users to filter chess speedruns. 
            </Typography>

        </Box>
    );
};
