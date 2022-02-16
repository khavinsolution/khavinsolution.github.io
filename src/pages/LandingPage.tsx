import Stack from '@mui/material/Stack';
import OurService from "../components/OurService";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import OurClients from "../components/OurClients";
import VerbalBrand from "../components/VerbalBrand";
import ConnectForm from "../components/Connect";
function LandingPage() {
  return (
    <Stack spacing={2}>
      <Section1 />
      <Section2 />
      <Section3 />
      <OurService />
      <OurClients />
      <ConnectForm />
    </Stack>
  );
}

export default LandingPage;
