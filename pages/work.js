import WorkSection from "../components/sections/WorkSection";
import listServicesInfo from "../data/servicesInfo.json";
import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
    const data = listServicesInfo

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

const Work = ({media, content}) => {

    return (
        <>
            <Head>
                <title>Услуги</title>
            </Head>
            <WorkSection props={media} services={content.servicesItem}/>
        </>

    );
};

export default Work;