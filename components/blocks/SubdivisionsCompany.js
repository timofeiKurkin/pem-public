import {
	AboutContent,
	AboutSubdivisions, AboutSubdivisionsListOption, AboutSubdivisionsOption,
	AboutSubdivisionsText, AboutSubdivisionsTitle,
	AboutSubdivisionsWrapper, Subdivisions
} from "../../styles/aboutPage/AboutSectionStyle";
import TitleContacts from "./TitleContacts";

const SubdivisionsCompany = ({props, subdivisions}) => {
	return (
		<Subdivisions {...props}>
			{subdivisions?.map(({id, title, subdivisionsText}) =>
				<AboutContent key={id} {...props}>
					<TitleContacts>{title}</TitleContacts>
					<AboutSubdivisions {...props}>
						{subdivisionsText?.map(({id, subdivisionsTitle, text}) =>
							<AboutSubdivisionsText key={id} {...props}>
								<AboutSubdivisionsTitle {...props}>{subdivisionsTitle}</AboutSubdivisionsTitle>
								<AboutSubdivisionsListOption {...props}>
									{text?.map(({id, text}) =>
										<AboutSubdivisionsOption key={id} {...props}>{id}. {text}</AboutSubdivisionsOption>
									)}
								</AboutSubdivisionsListOption>
							</AboutSubdivisionsText>
						)}
					</AboutSubdivisions>
				</AboutContent>
			)}
		</Subdivisions>
	);
};

export default SubdivisionsCompany;