import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, padding: 0 /* backgroundColor: '#fff', borderRadius: '25px' */ }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MuiTabs({ tabs, tabPanels, TabsSX, TabSX, mainBoxSX, sx }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={mainBoxSX}>
            <Box sx={sx}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    sx={TabsSX}
                >
                    {tabs.map((tab, i) => {
                        return (<Tab key={i} icon={tab.icon} iconPosition="start" label={tab.label} {...a11yProps(i)}
                            sx={TabSX}
                        />)
                    })}
                </Tabs>
            </Box>
            {tabPanels.map((tabPanel, i) => {
                return (
                    <TabPanel key={i} value={value} index={i}>
                        {tabPanel}
                    </TabPanel>
                )
            })}
        </Box>
    );
}
