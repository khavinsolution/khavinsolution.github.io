import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Stack from '@mui/material/Stack';
import OurService from "../../components/OurService";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import OurClients from "../../components/OurClients";
import ConnectForm from "../../components/Connect";
import { ThemeProvider } from '@mui/material/styles';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import Theme from '../../Theme'

import { Container } from "@mui/material";
import Section from "../../components/Section";
import Engineer from "../../components/Engineer";
import Workspace from "../../components/Workspace";
import Breadcrumb from "../../components/Breadcrumb";

const content = {
    title: 'With Us',
    subtitle: 'the mision critical IT services by great people..',
    content: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.'
}

const Aboutus: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={Theme}>
                <div className="App">
                    <NavigationBar />
                    <Container maxWidth={false}>
                        {/* <Breadcrumb /> */}
                        <Section data={content} image={false} isFullWidth isMore={false} paddingBottomCustom={'1rem'} />
                        <Engineer />
                        <Workspace isShowImage />
                    </Container>
                    <Footer />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Aboutus
