import indexInfo from "../data/indexInfo.json"
import MainSection from "../components/sections/MainSection";

export const getStaticProps = async () => {
    const data = indexInfo

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

export default function Home({content, media}) {
    return (
        <MainSection content={content} props={media}/>
    )
}