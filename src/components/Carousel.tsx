import Carousel from "react-material-ui-carousel";
import { IconButton, Paper, Theme } from "@mui/material";
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { MouseEventHandler } from "react";
import { createStyles, makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    custom1: {
      marginTop: 70.56,
      marginBottom: 85.46,
      width: "230px",
      height: "243.54px",
    },
    custom2: {
      backgroundColor: "#F7F9FA",
    },
    navButton: {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      padding: 0
    },
    navButtonIcon: {
      fontSize: '48px'
    }
  })
);

const items = [
  {
    url: "./Website.svg",
  },
  {
    url: "./Mobile.svg",
  },
];

export default function MobileImg() {
  const classes = useStyles();

  return (
    <div></div>
    // <Carousel
    //   animation="fade"
    //   autoPlay={false}
    //   swipe={true}
    //   navButtonsAlwaysVisible={true}
    //   indicators={false}
    //   NavButton={({ onClick, className, style, next, prev }) => (
    //     <IconButton onClick={onClick as MouseEventHandler} className={`${classes.navButton} ${className}`} style={style}>
    //       {next && <NavigateNext className={classes.navButtonIcon} />}
    //       {prev && <NavigateBefore className={classes.navButtonIcon} />}
    //     </IconButton>
    //   )
    //   }
    // >
    //   {items.map((item, i) => (
    //     <Item key={i} item={item} />
    //   ))}
    // </Carousel>
  );
}

function Item(props: { item: { url: string | undefined } }) {
  const classes = useStyles();
  return (
    <Paper className={classes.custom2}>
      <img className={classes.custom1} src={props.item.url} alt=""></img>
      {/* <h2>{props.item.url}</h2>
            <p>{props.item.description}</p> */}
    </Paper>
  );
}
