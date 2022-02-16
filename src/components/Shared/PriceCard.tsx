import React from 'react';
import { Card, CardActions, CardContent, Typography, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    width: 368,
    height: 618,
  },
  padding37: {
    paddingLeft: 37,
    fontSize: "1.1875rem",
  },
  bluebutton: {
    backgroundColor: "#5C65AC",
    color: "#FFFFFF",
    fontSize: "0.9375rem",
    marginLeft: 25,
    marginRight: 25,
  },
  money: {
    paddingTop: 15,
    marginLeft: 9,
    marginRight: 9,
  },
  padding48: {
    paddingTop: 48,
    marginLeft: 9,
    marginRight: 9,
  },
  margin9: {
    marginLeft: 9,
    marginRight: 9,
  },
  cardaction: {
    paddingBottom: 1,
  }
});

export default function PriceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.padding48} align="left" variant="h5" gutterBottom>
          Standard Plus License
        </Typography>
        <Typography className={classes.margin9} align="left" variant="subtitle2" paragraph>
          A pay-once license, just for you
        </Typography>
        <Divider className={classes.margin9} />
        <Typography className={classes.money} align="left" variant="h3" paragraph>
          $89
        </Typography>
        <Typography className={classes.padding37} align="left" paragraph>
          Rich, responsive landing pages
        </Typography>
        <Typography className={classes.padding37} align="left" paragraph>
          100+ styled components
        </Typography>
        <Typography className={classes.padding37} align="left" paragraph>
          Flexible, simple license
        </Typography>
        <Typography className={classes.padding37} align="left" paragraph>
          Speedy build tooling
        </Typography>
        <Typography className={classes.padding37} align="left" gutterBottom>
          6 months free support included
        </Typography>
      </CardContent>
      <CardActions className={classes.cardaction}>
        <Button className={classes.bluebutton} fullWidth={true} variant="contained" size="small">SUBCRIBE NOW</Button>
      </CardActions>
      <CardContent>
        <Typography align="center" variant="caption">
          Fully featured 30-day free trial
        </Typography>
      </CardContent>
    </Card>
  );
}
