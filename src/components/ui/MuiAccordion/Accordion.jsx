import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MuiAccordion({ sx, rows }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {rows.map((row, i) => {
                return (
                    <Accordion key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}
                        sx={sx}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"panel" + i + "bh-content"}
                            id={"panel" + i + "bh-header"}
                        >
                            <Typography sx={{
                                width: '80%',
                                flexShrink: 0,
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '162.9%',
                                color: '#323232',
                            }}>
                                {row.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '29px',
                                    color: '#323232',
                                }}
                            >
                                {row.text}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </>
    );
}