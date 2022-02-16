import { Container, Divider } from "@mui/material";
import OurService from "../components/OurService";
import Pricing from "../components/Pricing";
import Section from "../components/Section";
import ConnectForm from "../components/Connect";
import pizza4ps from "../assets/pizza4ps.png";
import varroc from "../assets/varroc.png";
import alpha from "../assets/alpha.png";
import SPL from "../assets/SPL.png";
import Breadcrumb from "../components/Breadcrumb";

const content = {
  title: 'Make the future',
  subtitle: 'Fast Delivery.',
  content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

const content2 = {
  title: 'With Us',
  subtitle: 'Fast Delivery.',
  content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}
const content3 = {
  title: 'We are never stop',
  subtitle: 'Fast Delivery.',
  content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

const content4 = {
  title: 'We are never stop',
  subtitle: 'Fast SPL SUCCESS STORY.',
  content: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.

    We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world..`
}


function Portfolio() {
  return (
    <Container maxWidth={false} >
      <Breadcrumb />
      <Section data={content} image={pizza4ps} />
      <Section data={content2} image={varroc} reverse={true} />
      <Section data={content3} image={alpha} />
      <Section data={content4} image={SPL} reverse={true} column={true} />
    </Container>
  );
}

export default Portfolio;
