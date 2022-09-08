import { memo, useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DaoMember from '@components/DaoMember';
import { styled } from '@mui/material/styles';
import Search from '../Search';
import { DaoTabs } from './style';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ContentTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <DaoTabs className="mt-100">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', texttransform: 'none' }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab label="Members" {...a11yProps(0)} />
            <Tab label="Contribution" {...a11yProps(1)} />
            <Tab label="Vote" {...a11yProps(2)} />
            <Tab label="Fund" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Search />
          <DaoMember />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Contribution
        </TabPanel>
        <TabPanel value={value} index={2}>
          Vote
        </TabPanel>
        <TabPanel value={value} index={3}>
          Fund
        </TabPanel>
      </Box>
    </DaoTabs>
  );
};
export default memo(ContentTabs);
