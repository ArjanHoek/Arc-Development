import React, { Fragment, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg';
import Navigation from './Navigation';

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="Company logo" />
            <Navigation />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarUnderlay}></div>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => {
  return {
    toolbarUnderlay: {
      ...theme.mixins.toolbar,
      marginBottom: '3rem',
    },
    logo: {
      height: '7rem',
    },
  };
});
