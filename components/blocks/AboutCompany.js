import {
	AboutCompanyInfo,
	AboutContent,
	AboutContentText, AboutContentTextWrapper,
	AboutImg,
	AboutMainWrapper
} from "../../styles/aboutPage/AboutSectionStyle";
import Image from "next/legacy/image";
import TitleContacts from "./TitleContacts";

const AboutCompany = ({props, aboutCompany}) => {
	return (
		<AboutCompanyInfo {...props}>
			{aboutCompany?.map(({id, title, image, aboutText}) =>
				<AboutMainWrapper key={id} {...props}>
					<AboutImg {...props}>
						<Image src={image}
							   alt={'Logo Full'}
							   layout={'fill'}
							   objectFit={'contain'}
							   priority
						/>
					</AboutImg>

					<AboutContent {...props}>
						<TitleContacts>{title}</TitleContacts>
						<AboutContentTextWrapper {...props}>
							{aboutText.map(({id, text}) =>
								<AboutContentText key={id} {...props}>{text}</AboutContentText>
							)}
						</AboutContentTextWrapper>
					</AboutContent>
				</AboutMainWrapper>
			)}
		</AboutCompanyInfo>

	);
};

export default AboutCompany;