import React from 'react';
import FirstComponent from "../FirstComponent";
import AboutComponent from "../AboutComponent";
import AdvantagePage from "../AdvantagePage";
import ProjectPage from "../ProjectPage";
import ListServices from "../ListServices";
import QuestionPage from "../QuestionPage";
import {MainSectionStyle} from "../../styles/indexPage/MainSectionStyle";

const MainSection = ({content, props}) => {
	return (
		<MainSectionStyle>
			<FirstComponent project={content.projects} props={props}/>
			<AboutComponent props={props}/>
			<AdvantagePage advantage={content.advantage} props={props}/>
			<ProjectPage projects={content.projects} props={props}/>
			<ListServices servicesItem={content.servicesItem} props={props}/>
			<QuestionPage props={props}/>
		</MainSectionStyle>
	);
};

export default MainSection;