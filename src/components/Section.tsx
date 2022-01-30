import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  CardActions
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '2rem',
  },
  card: {
    boxShadow: 'none !important',
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
    width: '100%'

  },
  subCardTitle: {
    marginBottom: '20px',
    textTransform: 'capitalize',
    fontFamily: 'Fira Sans',
  },
  media: {
    height: 240,
  },
});

function Section({ paddingBottomCustom, isMore = true, isFullWidth, image, data, reverse, column }: any) {
  const classes = useStyles();
  // const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const paddingBottom = paddingBottomCustom || '5rem'
  return (
    data && !data.contents ?
      <Container sx={{ paddingBottom: paddingBottom }}>
        <Grid container
          className={classes.root}
          direction={column ? "column-reverse" : reverse ? "row" : "row-reverse"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={isFullWidth ? 12 : 6} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h2" align="left" className={classes.cardTitle}>
                  {data.title}
                </Typography>
                <Typography variant="h4" color="secondary" align="left" className={classes.subCardTitle}>
                  {data.subtitle}
                </Typography>
                <Typography variant="subtitle2" align="left" color="textPrimary">
                  {data.content}
                </Typography>
              </CardContent>
              {
                isMore && <CardActions>
                  <Button color="primary" variant="outlined" className={classes.button}>
                    More
                  </Button>
                </CardActions>
              }

            </Card>
          </Grid>
          {
            image && <Grid item md={6} xs={12}>
              <img src={image} alt="Team Work" className={classes.img} />
            </Grid>
          }

        </Grid>
      </Container> :
      <Container sx={{ paddingBottom: paddingBottom }} >
        <Grid container
          className={classes.root}
          direction={reverse ? "row" : "row-reverse"}
          justifyContent="space-between"
          alignItems="center"
        >
          {image && <Grid item md={6} xs={12}>
            <img src={image} alt="Team Work" className={classes.img} />
          </Grid>}
          {data.contents.map((content: any) => {
            return (
              <Grid item md={6} xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h2" align="left" className={classes.cardTitle}>
                      {content.title}
                    </Typography>
                    <Typography variant="h3" color="secondary" align="left" className={classes.subCardTitle}>
                      {content.subtitle}
                    </Typography>
                    <Typography variant="h6" align="left" color="textPrimary">
                      {content.content}
                    </Typography>
                  </CardContent>
                  {
                    isMore && < CardActions >
                      <Button color="primary" variant="outlined" className={classes.button}>
                        More
                      </Button>
                    </CardActions>
                  }
                </Card>
              </Grid>
            )
          })}


        </Grid>
      </Container>
  );
}

export default Section;