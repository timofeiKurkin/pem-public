import contactsInfo from '../data/contactsInfo.json'
import ContactsSection from "../components/sections/ContactsSection";
import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
    const data = contactsInfo

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

const Contacts = ({content, media}) => {
    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <main className='grid'>
                <ContactsSection content={content} props={media}/>
            </main>
        </>

    );
};

export default Contacts;