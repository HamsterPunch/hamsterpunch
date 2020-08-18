import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import Navigation from '../components/Navigation';
import HomePanel from '../components/HomePanel';
import InfoSkillPanel from '../components/InfoSkillPanel';
import ProjectsPanel from '../components/ProjectsPanel';
import ContactPanel from '../components/ContactPanel';

const Home = () => {
    return (
        <>
            <Head>
                <title>햄스터펀치's</title>
                <meta name='description' content='웹 개발자 햄스터펀치의 포트폴리오' />
                <meta property='og:title' content='웹 개발자 포트폴리오' />
                <meta property='og:description' content='햄스터펀치의 포트폴리오' />
            </Head>
            <AppLayout>
                <Navigation />
                <HomePanel />
                <InfoSkillPanel />
                <ProjectsPanel />
                <ContactPanel />
            </AppLayout>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    );
};

export default Home;