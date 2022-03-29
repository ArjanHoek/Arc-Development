import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function Navigation() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className={classes.tabContainer}
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Tab className={classes.tab} label="Home" {...a11yProps(0)} />
      <Tab className={classes.tab} label="Services" {...a11yProps(1)} />
      <Tab className={classes.tab} label="The Revolution" {...a11yProps(2)} />
      <Tab className={classes.tab} label="About Us" {...a11yProps(3)} />
      <Tab className={classes.tab} label="Contact Us" {...a11yProps(4)} />
    </Tabs>
  );
}

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
}));
