import SwiperSection from "./ui/SwiperSection";
import Button from "./ui/Button";
import Title from "./blocks/Title";
import {
    Project,
    ProjectButton,
    ProjectContainer,
    ProjectSwiper, ProjectTitle,
    ProjectWrapper
} from "../styles/indexPage/ProjectPageStyle";
import useWindowSize from "../hooks/useWindowSize";

export const ProjectPage = ({projects, props}) => {
    const windowSize = useWindowSize()
    return (
        <ProjectWrapper {...props}>
            <div className={'grid'}>
                <Project {...props}>
                    <ProjectTitle>
                        <Title>Наши последние проекты</Title>
                    </ProjectTitle>
                    <ProjectContainer {...props}>
                        <ProjectSwiper {...props}>
                            <SwiperSection projects={projects} props={props} width={windowSize.width}/>
                        </ProjectSwiper>

                        <ProjectButton {...props}>
                            <Button href={'project'}>Больше проектов</Button>
                        </ProjectButton>
                    </ProjectContainer>
                </Project>
            </div>

        </ProjectWrapper>

    );
};

export default ProjectPage;