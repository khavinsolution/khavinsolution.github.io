import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Theme } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import NavLinks from '../data/nav'

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250
  },
  linkText: {
    textDecoration: `none`,
    color: theme.palette.text.secondary
  },
  selectedItem: {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    margin: `5px`,
    width: `calc(100% - 10px)`,
    padding: `4px 11px`,
    borderRadius: `5px`,
    '& .MuiIcon-colorPrimary': {
      color: '#FFF'
    }
  },
  logoContainer: {
    height: `64px`,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    width: '90px'
  }
}));


const SideDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({ drawOpen: false, selectedItem: 0 });

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, drawOpen: open });
  };

  const sideDrawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.logoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <Divider />
      <List component="nav">
        {NavLinks.map(({ title, path }, itemIndex) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button className={state.selectedItem === itemIndex ? classes.selectedItem : ''}>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={state.drawOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {sideDrawerList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideDrawer;
