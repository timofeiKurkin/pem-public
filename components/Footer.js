import Image from "next/legacy/image";
import Link from "next/link";
import navigationInfo from '../data/navigationInfo.json'
import contacts from "../data/contacts.json"
import {
	FooterLogo,
	FooterLogoContacts,
	FooterLogoImg,
	FooterMain,
	FooterMainContent,
	FooterName,
	FooterNameTitle,
	FooterNav,
	FooterNavItem,
	FooterNavList,
	FooterServices,
	FooterServicesItem,
	FooterServicesList,
	FooterServicesTitle,
	FooterStyle
} from "../styles/FooterStyle";

const Footer = ({props}) => {

	return (
        <FooterMain {...props}>
			<FooterMainContent>
				<FooterStyle {...props}>

					<FooterLogo {...props}>
						<FooterLogoImg {...props}>
							<Image
                                src={'/logoWhite.svg'}
                                width={74}
                                height={39}
                                alt={'logo'}/>
						</FooterLogoImg>
						<FooterLogoContacts {...props}>
							{contacts.phone}
						</FooterLogoContacts>
						<FooterLogoContacts {...props}>
							{contacts.mail}
						</FooterLogoContacts>
					</FooterLogo>

					<FooterNav {...props}>
						<FooterNavList {...props}>
							{navigationInfo.navigation.map(({id, title, path}) =>
								<FooterNavItem key={id} {...props}>
									<Link href={path}>
										{title}
									</Link>
								</FooterNavItem>
							)}
							<FooterNavItem {...props}>
								<Link href={'/contacts#vacancies'}>
									Вакансии
								</Link>
							</FooterNavItem>
						</FooterNavList>
					</FooterNav>

					<FooterServices {...props}>
						<FooterServicesTitle {...props}>Работы и услуги</FooterServicesTitle>
						<FooterServicesList {...props}>
							{navigationInfo.services.map(({id, title}) =>
								<FooterServicesItem
									key={id}
									{...props}
								>
									{title}
								</FooterServicesItem>
							)}
						</FooterServicesList>
					</FooterServices>

				</FooterStyle>
			</FooterMainContent>

			<FooterName>
				<FooterNameTitle {...props}>
					©2008–2022 ООО «ПромЭлектроМонтаж»
				</FooterNameTitle>
			</FooterName>

		</FooterMain>
    );
};

export default Footer;