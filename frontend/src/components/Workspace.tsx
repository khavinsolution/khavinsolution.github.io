import {
    Card,
    CardMedia,
    CardContent,
    Container,
    Grid,
    Theme,
    Typography,
} from "@mui/material";
import workspace from '../assets/workspace.png'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    card: {
        boxShadow: 'none !important'
    },
    cardTitle: {
        fontFamily: 'Raleway Dots !important',
        textTransform: 'capitalize',
    },


    subCardTitle: {
        textTransform: 'capitalize',
        fontFamily: 'Fira Sans',
        paddingBottom: '16px',
    },

    title: {
        color: 'black',
    },

    media: {
        height: 240,
        margin: '16px'
    },
}));


const itemData = [
    {
        img: workspace,
        title: "Workspace",
        author: 'author',
        story: {
            title: 'Experience new way of working',
            contents: [
                `Located in the heart of Ho Chi Minh City, We are working on a unique office solution – a combination of inspiring, friendly work environment with a professional attitude to welcome all of our members and guests.`
            ]
        }
    }, {
        img: workspace,
        title: "Our Culture",
        author: 'author',
        story: {
            title: 'Only Proven Experts',
            contents: [
                `KhavinSolution is a development company in the Viet Nam that operates across the Americas, Europe, and the Middle East. We give you the best people from all around the world, and thanks to our global outreach, we can eliminate the communication delay issue. More so, we guarantee a cultural matching between you and your remote team.`,
                `If you ever worked with freelance developers or know a thing or two about how they work, you probably know that it might become quite a challenge to find a person who can showcase a viable portfolio and certification of expertise. At KhavinSolution, we offer you an entire team of developers with credible certifications of expertise and proven experience. We provide all the information you might need:`,
                `* Education info; `,
                `* Proofs of hands - on field experience;`,
                `* Regular training for the teams;`,
                `* Viable certifications;`,
                `* Consistent quality;`,
                `* Low attrition rates.`,
                `Our crew can handle tasks of any complexity and deliver measurable success you are going to be proud of. We are compelled to boost your digital transformation and change things for the better, and if you need a team of true professionals to help you on your journey, KhavinSolution is here for you.`

            ]
        }
    },
]

function Workspace({ isShowImage }: any) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container
                className={classes.root}
                direction="column-reverse"
                justifyContent="space-between"
                alignItems="center"
            >
                {itemData.map(item => {
                    return <Grid item md={12} xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" align="left" className={classes.cardTitle}>
                                    {item.title}
                                </Typography>
                            </CardContent>

                            {isShowImage && <CardMedia
                                className={classes.media}
                                image={item.img}
                                title="Paella dish"
                            />}

                            {item.story && (
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="h4" color="secondary" align="left" className={classes.subCardTitle}>
                                            {item.story.title}
                                        </Typography>
                                        {item.story.contents.map(content => {
                                            return content[0] === "*" ? <Typography pl={3} variant="body1" align="left" color="textPrimary">
                                                {content}<br></br><br></br>
                                            </Typography> : <Typography variant="body1" align="left" color="textPrimary">
                                                {content}<br></br><br></br>
                                            </Typography>
                                        })}
                                    </CardContent>
                                </Card>
                            )}
                        </Card>
                    </Grid>
                })}

            </Grid>
        </Container >
    );
}

export default Workspace;