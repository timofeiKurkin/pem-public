import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setPage, setProject} from "../store/reducers/projectSlice";
import React, {useEffect} from "react";
import projectInfo from '../data/projectsInfo.json'
import ProjectSection from "../components/sections/ProjectSection";
import Head from "next/head";

export const getStaticProps = async () => {
    const data = projectInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            content: data.projects
        }
    }
}

const Project = ({content, media}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setProject(content))
    }, [content, dispatch])

    return (
        <>
            <Head>
                <title>Проекты</title>
            </Head>
            <ProjectSection props={media}
            />
        </>

    );
};

export default Project;