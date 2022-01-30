import { Button, Card, CardActions, CardContent, Container, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import teamWorkImg from "../assets/Teamwork.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: '10em',
    paddingBottom: '75px'
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
    width: '80%'
  },
  subCardTitle: {
    marginBottom: '20px',
    textTransform: 'capitalize',
    fontFamily: 'Fira Sans',
  }
});

const data = {
  title: 'make the future',
  subtitle: 'of technology beautiful',
  content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

const renderCardContent = (data: any, matches: any, classes: any) => (<CardContent>
  <Typography variant={matches ? 'h2' : 'h3'} align="left" className={classes.cardTitle}>
    {data.title}
  </Typography>
  <Typography variant={matches ? 'h4' : 'h5'} color="secondary" align="left" className={classes.subCardTitle}>
    {data.subtitle}
  </Typography>
  <Typography mt={2} variant="body2" align="left" color="textPrimary">
    {data.content}
  </Typography>
</CardContent>)

function Section1() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (
    <Container>
      <Grid container
        className={classes.root}
        direction={matches ? "row" : "column-reverse"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            {renderCardContent(data, matches, classes)}
            <CardActions>
              <Button color="primary" variant="contained" className={classes.button}>
                Contact us
              </Button>
              <Button color="primary" variant="outlined" className={classes.button}>
                More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={teamWorkImg} alt="Team Work" className={classes.img} />
        </Grid>
      </Grid>
    </Container >
  );
}

export default Section1;