import { Container, Grid } from "@mui/material";
import Section from "../components/Section";
import Breadcrumb from "../components/Breadcrumb";
import Workspace from "../components/Workspace";
import VerbalBrand from "../components/VerbalBrand";
import workspace from '../assets/workspace.png'

const content = {
    title: 'make the future',
    subtitle: 'of technology beautiful',
    content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

function Details() {
    return (
        <Container maxWidth={false}>
            <Grid container
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item md={12} xs={12}>
                    <Container>
                        <Breadcrumb />
                    </Container>
                    <Section column reverse isFullWidth={true} data={content} image={workspace} />
                    <Workspace isShowImage={false} />
                </Grid>
            </Grid>

        </Container>
    );
}

export default Details;
