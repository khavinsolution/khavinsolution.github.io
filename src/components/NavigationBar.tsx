import { AppBar, Button, Container, Divider, Hidden, IconButton, Link, List, ListItem, ListItemText, Theme, Toolbar } from "@mui/material";
import SideDrawer from "./SideDrawer";
import logo from "../assets/logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import React from 'react';

export type NavLink = {
  title: string;
  path: string;
  icon?: any;
}
const primaryColor = '#42527F'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '0px',
    borderTop: `8px solid ${primaryColor}`,
  },
  toolbar: {
    height: '100%',
    background: ' #ffffffe6 ',
  },
  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    justifyContent: `space-between`,
    width: `auto`,
    display: `flex`,
  },
  linkTextSpan: {
    width: '120px',
    fontSize: '14px',
    display: `inline-flex;`,
    fontWeight: 'bold' as 'bold',
    color: theme.palette.text.secondary,
    textTransform: `uppercase`,
  },
  linkText: {
    textDecoration: `none`,
    '& .MuiListItemText-primary': {
      whiteSpace: 'nowrap'
    }
  },
  subTopBar: {
    display: `flex`,
    background: primaryColor,
    height: '16px'
  },
  logo: {
    width: '100%'
  }
}));

const navLinks = [
  { title: `home`, path: `/#` },
  { title: `about us`, path: `/about-us` },
  { title: `portfolio`, path: `/portfolio` },
];

function NavigationBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="transparent"
        className={classes.root}>
        {/* <div className={classes.subTopBar}>.</div> */}
        <Toolbar
          variant="dense"
          className={classes.toolbar}>
          <Container  >
            <nav className={classes.navbarDisplayFlex}>
              <Hidden mdUp>
                <SideDrawer />
              </Hidden>
              <Button component={Link}>
                <img alt="logo" src={logo} className={classes.logo} />
              </Button>
              <Hidden xsUp>
                <IconButton color="primary">
                  <SearchIcon />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItem>
                        <ListItemText primary={<span className={classes.linkTextSpan} >{title}</span>} />
                      </ListItem>
                    </a>
                  ))}
                  <ListItem>
                    <Button variant="contained" color="primary">
                      CONTACT US
                    </Button>
                  </ListItem>
                </List>
              </Hidden>
            </nav>
          </Container>
        </Toolbar>
        <Divider />
      </AppBar>
    </React.Fragment>

  );
}

export default NavigationBar;