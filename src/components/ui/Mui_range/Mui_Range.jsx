import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Mui_Range({ sx }) {
    return (
        <Box sx={{width: '100%'}}>
            <Slider
                /* size="small" */
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={sx}
            />
            {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
        </Box>
    );
}
