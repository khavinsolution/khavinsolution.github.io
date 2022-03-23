import { Card, CardContent, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Theme, Typography } from "@mui/material";
import logo192 from '../assets/logo192.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: '100%'
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
        width: '100%'
    },
    subCardTitle: {
        textTransform: 'capitalize',
        fontFamily: 'Fira Sans',
        paddingBottom: '16px',
    },
    imageList: {
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    listItem: {
        width: '10%',
    },
}));

const data: any = {
    title: 'ENGINEERS',
}

const itemData = [
    {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }, {
        img: logo192,
        title: "title",
        name: 'name',
    }
]

function Engineer(image: any) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container >
                <Grid item md={12} xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h4" align="left" className={classes.cardTitle}>
                                {data.title}
                            </Typography>
                            {data.subtitle && <Typography variant="h6" color="secondary" align="left" className={classes.subCardTitle}>
                                {data.subtitle}
                            </Typography>}
                            {data.content && <Typography variant="body1" align="left" color="textPrimary">
                                {data.content}
                            </Typography>}
                        </CardContent>
                    </Card>
                    <ImageList cols={5} sx={{ height: 600 }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}`}
                                    srcSet={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.name}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                        >
                                            <LinkedInIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Engineer;

