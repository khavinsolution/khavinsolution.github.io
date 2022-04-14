import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import Section from '../Section';

const { Header, Content, Footer } = Layout;
import styles from './Layout.module.css'
import teamWorkImg from "../../assets/Teamwork.svg";
import handShake from "../../assets/HandShake.svg";
import jsLogo from "../../assets/JS_logo.svg";
import netLogo from "../../assets/NET_logo.svg";
import phpLogo from "../../assets/PHP_logo.svg";
import ptLogo from "../../assets/PT_logo.svg";
import reactLogo from "../../assets/React_logo.svg";
import sfLogo from "../../assets/SF_logo.svg";
import pngwing from '../../assets/pngwing.png'
const NavLinks = [
    { key: 1, title: `home`, path: `/#` },
    { key: 2, title: `about us`, path: `/aboutus` },
    { key: 3, title: `porfolio`, path: `/porfolio` },
];

const data1 = {
    title: 'make the future',
    subtitle: 'of technology beautiful',
    contents: 'We provide mission - critical IT services that transform global businesses.We deliver excellence for our customers, colleagues and communities around the world.',
    image: teamWorkImg
}
const data2 = {
    title: 'we delivers',
    subtitle: 'the mission critical IT services that move the world',
    contents: 'KhanvinSolution has been delivering success to partners across industries for over 3 years. This vast experience helped us sharpen our practices making the delivery of every project nearly flawless.',
    image: handShake,
}

const techList = [
    { key: 1, image: reactLogo, size: 50 },
    { key: 2, image: phpLogo, size: 50 },
    { key: 3, image: jsLogo, size: 50 },
    { key: 4, image: ptLogo, size: 50 },
    { key: 5, image: netLogo, size: 50 },
    {
        key: 6, image: sfLogo, size: 50
    },
];

const data3 = {
    title: 'Our skills ',
    subtitleTop: '20+ PROJECTS ',
    contents: 'We offers you a global talent pool of senior full stack developers who have the experience working on the most complicated projects for the world’s largest organizationsWe are proud of our expertise and are ready to share it.We deliver perfect solutions tailored to your needs and business objectives.We do not just code, we care about the quality of the end product as much as you do. ',
    image: techList,
}

const data4 = {
    title: 'Our Services ',
    subtitle: 'Our Services ',
    contents: ' We, the best IT service provider company in Viet Nam help your business in getting loyalty back by transforming into latest advanced IT technology. Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support.',
    image: pngwing,
}

const clients = [
    { key: 1, image: './image 4.png', size: 50 },
    { key: 2, image: './image 1.png', size: 50 },
    { key: 3, image: './image 2.png', size: 50 },
    { key: 4, image: './image 3.png', size: 50 },
    { key: 5, image: './image 0.png', size: 50 },
];
const data5 = {
    title: 'Our Clients ',
    contents: 'A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy. ',
}



export default function MainLayout() {
    return (
        <>
            <Layout className="layout">
                <Header className={styles.header}>
                    <div className={styles.logo}>test</div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                        {NavLinks.map((nav) => {
                            return <Menu.Item styles={{ color: '#000' }} key={nav.key}>{`${nav.title}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Section data={data1}></Section>
                        <Section data={data2} reverse></Section>
                        <Section data={data3}></Section>
                        <Section data={data4}></Section>
                        <Section data={data5}></Section>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    )
}