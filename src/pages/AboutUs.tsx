import { Container } from "@mui/material";
import Section from "../components/Section";
import Engineer from "../components/Engineer";
import Workspace from "../components/Workspace";
import Breadcrumb from "../components/Breadcrumb";

const content = {
    title: 'With Us',
    subtitle: 'the mision critical IT services by great people..',
    content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}
function AboutUs() {
    return (
        <Container maxWidth={false}>
            <Breadcrumb />
            <Section data={content} image={false} isFullWidth isMore={false} paddingBottomCustom={'1rem'} />
            <Engineer />
            <Workspace isShowImage />
        </Container>
    );
}

export default AboutUs;
