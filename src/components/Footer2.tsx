import {
  AppBar,
  Container,
  Grid,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import dotmap from "../assets/dotmap.png";
import fbLogo from "../assets/FB_logo.svg";
import googleLogo from "../assets/Google_logo.svg";
import twitterLogo from "../assets/Twitter_logo.svg";
import instaLogo from "../assets/Insta_logo.svg";
import VerbalBrand from "./VerbalBrand";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#43527F'
  },
  marginBottom20: {
    marginBottom: '20px'
  },
  logo: {
    width: '200px',
    marginBottom: '45px'
  },
  linkContainer: {
    marginBottom: '40px'
  },
  navLink: {
    padding: '7px 13px',
    color: theme.palette.text.primary,
    fontSize: '23px'
  },
  inputContainer: {
    width: '45%',
    minWidth: '300px'
  },
  inputWraper: {
    padding: '7px 12px 7px 60px',
    backgroundColor: theme.palette.primary.main
  },
  input: {
    width: '70%',
    color: '#FFF',
    fontSize: '20px'
  },
  inputButton: {
    backgroundColor: '#393B8A',
    color: '#FFF',
    width: '30%',
    fontSize: '20px'
  },
  contactWraper: {
    marginTop: '60px',
    marginBottom: '60px',
  },
  contactItem: {
    margin: '0 10px'
  },
  card: {
    boxShadow: 'none !important'
  },
  cardTitle: {
    fontFamily: 'Raleway Dots !important',
    textTransform: 'capitalize',
  },
  button: {
    '& .MuiButton-label': {
      minWidth: '85px'
    }
  },
  img: {
    width: '65%'
  },
  subCardTitle: {
    marginBottom: '20px',
    textTransform: 'capitalize',
    fontFamily: 'Fira Sans',
  },
  verbal: {
    background: '#fff',
  }
}));

const navLinks = [
  { title: `Shop`, path: `/shop` },
  { title: `Reviews`, path: `/reviews` },
  { title: `Help`, path: `/help` },
  { title: `Returns`, path: `/returns` },
  { title: `Story`, path: `/story` },
  { title: `Partnership`, path: `/partner` },
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

function Footer() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  return (
    <Grid container
      className={classes.root}
      direction={matches ? "row" : "column-reverse"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item sm={6} md={12} xs={6} className={classes.verbal}>
        <VerbalBrand />
      </Grid>
      <Grid item md={3} xs={12}>
      </Grid>
      <Grid item md={9} xs={12}>
        <img src={dotmap} alt="Team Work" className={classes.img} />
      </Grid>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2020 khavinsolution.com
            </Typography>

          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  )
}

export default Footer;
