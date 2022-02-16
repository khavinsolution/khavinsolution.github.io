import {
  Box,
  Grid,
  Link,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import { Dotmap } from "./Dotmap";
import fbLogo from "../assets/FB_logo.svg";
import googleLogo from "../assets/Google_logo.svg";
import twitterLogo from "../assets/Twitter_logo.svg";
import instaLogo from "../assets/Insta_logo.svg";
import VerbalBrand from "./VerbalBrand";
import WaveBorder from "./Shared/WaveBorder";
import { makeStyles, useTheme } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#43527F',
    padding: '0 3em 3em 4em',
  },
  button: {
    '& .MuiButton-label': {
      minWidth: '85px'
    }
  },
  img: {
    width: '55%',
  },

  verbal: {
    background: '#fff',
  },
  zindex1: {
    position: 'relative',
  },
  menu: {
    background: '#43527F',
    color: '#fff',
    fontFamily: 'monospace !important',
  },
  map: {
    width: '80%',
  }
}));

const navLinks = [
  { title: `Carrer`, path: `/career` },
  { title: `Customer Stories`, path: `/customer_stories` },
  { title: `Investor Relations`, path: `/investor_relation` },
  { title: `Newsroom`, path: `/newroom` },
  { title: `Partner Ecosystem`, path: `/partner` },
];

const contactLink = [
  { title: `Facebook`, path: `/fb`, icon: fbLogo },
  { title: `Google`, path: `/google`, icon: googleLogo },
  { title: `Twitter`, path: `/twitter`, icon: twitterLogo },
  { title: `Instagram`, path: `/insta`, icon: instaLogo },
]


const data = {
  title: 'make the future',
  subtitle: 'of technology beautiful',
  content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link underline="none" color="#fff" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },

];

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

function Footer() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  return (
    <footer>
      <VerbalBrand />
      <WaveBorder
        upperColor="#FFFFFF"
        lowerColor="#42527F"
        animationNegativeDelay={4}
      />
      <Grid container
        className={classes.root}
        direction={matches ? "row" : "column-reverse"}
        justifyContent="space-around"
        alignItems="stretch"
      >
        <Grid item md={4} xs={12} className={classes.menu}>
          <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
            {navLinks && navLinks.map((link: any) => {
              return (<Box component="li" sx={matches ? { py: 1.5, fontSize: '16px', display: 'flex', justifyContent: 'flex-end' } : { py: 1.5, display: 'flex', justifyContent: 'flex-start' }} >
                <Link underline="hover" color="#fff" href={link.path}><span className={classes.zindex1}>{link.title}</span></Link>
              </Box>)
            })}
          </Box>
          <Box sx={{ m: 0, listStyle: 'none', pt: 5 }}>
            <Typography sx={matches ? { display: 'flex', justifyContent: 'flex-end' } : { display: 'flex', justifyContent: 'flex-start' }} variant="h6" gutterBottom component="div">
              CONTACT US
            </Typography>
            <Typography sx={matches ? { display: 'flex', justifyContent: 'flex-end' } : { display: 'flex', justifyContent: 'flex-start' }} variant="subtitle1" gutterBottom component="div">
              khang.nguyen@infinitesoftware.org
            </Typography>
            <Typography sx={matches ? { display: 'flex', justifyContent: 'flex-end' } : { display: 'flex', justifyContent: 'flex-start' }} variant="subtitle1" gutterBottom component="div">
              phone: +84903100458
            </Typography>
            <Typography variant="overline" component="div" sx={matches ? { display: 'flex', justifyContent: 'flex-end' } : { display: 'flex', justifyContent: 'flex-start' }} >
              © 2021. All rights reserved. khanvinsolution.com
            </Typography>
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box className={classes.map} >
            <Dotmap />
          </Box>
        </Grid>
      </Grid>

    </footer >
  )
}

export default Footer;
