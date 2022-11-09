import AboutSection from "../components/sections/AboutSection";
import aboutInfo from '../data/AboutContent.json'
import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
    const data = aboutInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            content: data
        }
    }
}

const About = ({media, content}) => {
    return (
        <>
            <Head>
                <title>О нас</title>
            </Head>
            <AboutSection props={media} aboutCompany={content.aboutCompany} subdivisions={content.subdivisions}/>
        </>

    );
};

export default About;