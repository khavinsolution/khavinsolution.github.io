import { Container, Grid, Typography } from "@mui/material";
import handShake from "../assets/404.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        padding: '10rem 0'
    },
    img: {
        width: '100%'
    },
});

const Custom404 = () => {
    const classes = useStyles();
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
                    <Typography variant="h1" align="left" color={'#43527F'}>
                        Oops!
                    </Typography>
                    <Typography variant="h5" align="left" color={'#43527F'}>
                        We can’t seem to find the page your are looking for.
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Custom404




