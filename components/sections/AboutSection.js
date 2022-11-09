import {
	AboutMain
} from "../../styles/aboutPage/AboutSectionStyle";
import React from "react";
import AboutCompany from "../blocks/AboutCompany";
import SubdivisionsCompany from "../blocks/SubdivisionsCompany";


const AboutSection = ({props, aboutCompany, subdivisions}) => {
	return (
		<div className={'grid'}>
			<AboutMain {...props}>
				<AboutCompany props={props} aboutCompany={aboutCompany}/>

				<SubdivisionsCompany props={props} subdivisions={subdivisions}/>
			</AboutMain>
		</div>
	);
};

export default AboutSection;