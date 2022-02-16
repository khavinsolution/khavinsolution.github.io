import React from "react";
import Image from '../assets/BackgroundVerbal.svg';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Image})`,
    margin: '20px 0',
    height: '250px',
    backgroundPosition: '0% 0%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  },
});

const data: any = {
  content: 'COLLEAGUES DELIVERING EXELLENCE FOR OUR DELIVERING EXCELLENCE FOR OUR CUSTOMER FOR OUR CLIENT CUSTOMER AND '
}
export default function VerbalBrand() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}
