import React from "react";

import {
  Typography,
  Grid,
  Hidden,
  Container,
  Card,
  CardMedia,
  CardActionArea,
  Theme
} from "@mui/material";
import pngwing from '../assets/pngwing.png'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundImage: `url(${pngwing})`,
    paddingTop: `5em`,
    paddingBottom: `5rem`,
  },
  title: {
    marginTop: 15,
    textTransform: 'capitalize',
    fontFamily: 'Fira Sans',
  },
  bodyw: {
  },
  bodym: {
    marginLeft: 37,
    marginRight: 44,
  },
  cardspace: {
    padding: '2rem',
    border: "none",
    boxShadow: "none",
  },
  brands: {
    paddingTop: '2rem',
  }
})
);

const data: any = {
  title: 'Our Clients ',
  subtitle: 'Our Clients ',
  content: 'A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy. '
}
export default function OurClients() {
  const classes = useStyles();
  const imageHeight = '80'
  return (
    <Grid className={classes.root}>
      <Typography className={classes.title} variant="h4" color="primary">
        {data.title}
      </Typography>
      <Hidden smUp>
        <Typography className={classes.bodym} align="left" variant="subtitle1" color="textPrimary">
          <Container>
            {data.content}
          </Container>
        </Typography>
      </Hidden>
      <Hidden smDown>
        <Typography className={classes.bodyw} variant="subtitle1" color="textPrimary">
          <Container>
            {data.content}
          </Container>
        </Typography>
      </Hidden>
      <Grid container className={classes.brands} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center">
            <Grid className={classes.cardspace} key={1} item>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={imageHeight}
                    image="./image 4.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.cardspace} key={2} item>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={imageHeight}
                    image="./image 5.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.cardspace} key={3} item>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={imageHeight}
                    image="./image 3.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid className={classes.cardspace} key={4} item>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={imageHeight}
                    image="./image 6.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}
