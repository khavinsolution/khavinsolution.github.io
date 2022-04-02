import React from "react";
import { Typography, Link, Grid, SvgIcon } from "@mui/material";
import PriceCard from "./Shared/PriceCard";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F7F9FA",
  },
  paper: {
    height: 140,
    width: 100,
  },
  cardspace: {
    padding: 22.5,
  },
  greentext: {
    color: "#5CB29C",
    marginBottom: 36,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 95,
    marginBottom: 17,
  },
  caption: {
    marginBottom: 16,
    color: "#0000008A",
  },
  sgv: {
    paddingLeft: 12,
  },
});

export default function Pricing() {
  const classes = useStyles();
  // const preventDefault = (event: React.SyntheticEvent) =>
  //   event.preventDefault();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Simple pricing
      </Typography>
      <Typography className={classes.caption}>
        A pay-once license, just for you.
      </Typography>

      <Typography className={classes.greentext} variant="h6">
        <Link href="#" color="inherit">
          See what's included
          <SvgIcon
            className={classes.sgv}
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="black" />
          </SvgIcon>
        </Link>
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid className={classes.cardspace} key={1} item>
              <PriceCard />
            </Grid>
            <Grid className={classes.cardspace} key={2} item>
              <PriceCard />
            </Grid>
            <Grid className={classes.cardspace} key={3} item>
              <PriceCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
