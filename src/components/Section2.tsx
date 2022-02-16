import { Card, CardContent, Container, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import handShake from "../assets/HandShake.svg";
import { makeStyles } from "@mui/styles";

type info = {
  title: string,
  value: string
}

const useStyles = makeStyles({
  root: {
    paddingTop: '75px',
    paddingBottom: '75px'
  },
  card: {
    boxShadow: 'none !important'
  },
  cardTitle: {
    fontFamily: 'Raleway Dots !important',
    textTransform: 'capitalize',
    fontSize: '56px'
  },
  button: {
    '& .MuiButton-label': {
      minWidth: '85px'
    }
  },
  img: {
    width: '75%'
  },
  subCardTitle: {
    textTransform: 'capitalize',
    fontFamily: 'Fira Sans',
    paddingBottom: '16px',
  },
  infoItem: {
    minWidth: '90px',
    paddingTop: '10px'
  },
  spot: {
    paddingRight: '40px',
  }
});

const info: info[] = [
  {
    title: 'Project',
    value: '15+'
  },
  {
    title: 'Satifaction',
    value: '99%'
  },
  {
    title: 'Customers',
    value: '20'
  }
]
const data: any = {
  title: 'we delivers',
  subtitle: 'the mission critical IT services that move the world',
  content: 'KhanvinSolution has been delivering success to partners across industries for over 3 years. This vast experience helped us sharpen our practices making the delivery of every project nearly flawless.'
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


function Section2() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (
    <Container>
      <Grid container
        className={classes.root}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <img src={handShake} alt="Handshake" className={classes.img} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            {renderCardContent(data, matches, classes)}
            <CardContent>
              <Grid container>
                {info.map(({ title, value }: info, index) => {
                  return (
                    <Grid item xs={4} sm="auto" className={classes.infoItem} key={index}>
                      <div className={classes.spot}>
                        <Typography variant="h4" color="primary" align="center">
                          {value}
                        </Typography>
                        <Typography align="center" color="textSecondary">
                          {title}
                        </Typography>
                      </div>
                    </Grid>
                  )
                })
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section2;