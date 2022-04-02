import { Card, CardContent, Container, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import jsLogo from "../assets/JS_logo.svg";
import netLogo from "../assets/NET_logo.svg";
import phpLogo from "../assets/PHP_logo.svg";
import ptLogo from "../assets/PT_logo.svg";
import reactLogo from "../assets/React_logo.svg";
import sfLogo from "../assets/SF_logo.svg";
import { makeStyles } from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";

const useStyles = makeStyles({
  root: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: "#F7F9FA",
  },
  card: {
    boxShadow: 'none !important',
  },
  cardTitle: {
    lineHeight: '2rem',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  techLogo: {
    height: `146px`,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& img': {
      width: '33%'
    }
  },
});

const data: any = {
  title: '20+ PROJECTS ',
  subtitle: 'Our skills ',
  content: 'We offers you a global talent pool of senior full stack developers who have the experience working on the most complicated projects for the world’s largest organizationsWe are proud of our expertise and are ready to share it.We deliver perfect solutions tailored to your needs and business objectives.We do not just code, we care about the quality of the end product as much as you do. '
}

const techList = [
  reactLogo,
  phpLogo,
  jsLogo,
  ptLogo,
  netLogo,
  sfLogo
];
const renderCardContent = (data: any, matches: any, classes: any) => (<CardContent>
  <Typography variant={matches ? 'body2' : 'body2'} align="left" className={classes.cardTitle}>
    {data.title}
  </Typography>
  <Typography variant={matches ? 'h4' : 'h5'} color="secondary" align="left">
    {data.subtitle}
  </Typography>
  <Typography mt={2} variant="body2" align="left" color="textPrimary">
    {data.content}
  </Typography>
</CardContent>)


function Section3() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (<>
    <CssBaseline />
    <Grid container
      className={classes.root}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Container>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} xs={12}>
            <Card className={classes.card} sx={{ backgroundColor: 'transparent' }}>
              {renderCardContent(data, matches, classes)}
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container>
              {techList.map((techlogo, index) => (
                <Grid item md={4} xs={6} className={classes.techLogo} key={index}>
                  <img src={techlogo} alt="Technology" />
                </Grid>))
              }
            </Grid>
          </Grid>
        </Grid>
      </Container >
    </Grid >
  </>
  );
}

export default Section3;