import React from "react";
import {
  Typography,
  Grid,
  Button,
  Hidden,
  Container,
  Theme,
  Box,
  Link
} from "@mui/material";
import MobileImg from "./Carousel";
import { createStyles, makeStyles } from '@mui/styles'
import pngwing from '../assets/pngwing.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '2rem',
      backgroundImage: `url(${pngwing})`,
    },
    caption: {
      color: "#2D2E2F",
    },
    title: {
      marginTop: 15,
      textTransform: 'capitalize',
      fontFamily: 'Fira Sans',
    },
    bodyw: {
      marginTop: 21,
    },
    bodym: {
      marginTop: 14.44,
      marginLeft: 37,
      marginRight: 44,
    },
    image: {
      paddingLeft: '10rem',
    },
    imageMobile: {
      marginTop: 70.56,
      width: "230px",
      height: "243.54px",
    },
    mobile: {
      marginTop: 205,
      width: "448.59px",
      height: "475px",
    },
    flexw: {
      justifyContent: "center",
      display: "flex",
      paddingTop: '3rem',
      flexDirection: "row",
      alignItems: 'center',
      fontFamily: 'monospace',
    },
  })
);

const data: any = {
  title: 'Our Services ',
  subtitle: 'Our Services ',
  content: ' We, the best IT service provider company in Viet Nam help your business in getting loyalty back by transforming into latest advanced IT technology. Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support. '
}

const navLinks = [
  { title: `Development`, path: `/development` },
  { title: `Digital Transformation`, path: `/digital-transformation` },
  { title: `Business Analytics`, path: `/business-analytic` },
  { title: `Security`, path: `/security` },
  { title: `UX/UI Design Services`, path: `/ux-ui-design` },
];

export default function OurService() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.caption} variant="subtitle2">
        CUSTOMIZATION
      </Typography>
      <Typography className={classes.title} variant="h4" color="primary">
        {data.title}
      </Typography>
      <Hidden mdUp>
        <Typography className={classes.bodym} align="left" variant="subtitle1" color="textPrimary">
          {data.content}
        </Typography>
      </Hidden>
      <Hidden smDown>
        <Typography className={classes.bodyw} variant="subtitle1" color="textPrimary">
          <Container>
            {data.content}
          </Container>
        </Typography>
      </Hidden>
      <Hidden smUp>

        <MobileImg />
      </Hidden>
      <Hidden smDown>
        <div className={classes.flexw}>
          <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
            {navLinks && navLinks.map((link: any) => {
              return (<Box component="li" sx={{ py: 3, fontSize: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Link underline="hover" color="#040404" href={link.path}>{link.title}</Link>
              </Box>)
            })}
          </Box>
          <img className={classes.image} src="./Website.svg" alt="Website"></img>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.flexw}>
          <img className={classes.imageMobile} src="./Website.svg" alt="Website"></img>
          <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
            {navLinks && navLinks.map((link: any) => {
              return (<Box component="li" sx={{ py: 2, fontSize: '19px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Link underline="hover" color="#040404" href={link.path}>{link.title}</Link>
              </Box>)
            })}
          </Box>
        </div>
      </Hidden>
    </Grid>
  );
}
