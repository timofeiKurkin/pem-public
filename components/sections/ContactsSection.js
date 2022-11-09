import React from 'react';
import MapYandex from "../MapYandex";
import ContactsList from "../ContactsList";
import Vacancies from "../Vacancies";
import {MainContacts} from "../../styles/contactsPage/ContactsSectionStyle";

const ContactsSection = ({content, props}) => {
	return (
		<MainContacts {...props}>
			<MapYandex/>
			<ContactsList contacts={content.contacts} props={props}/>
			<Vacancies vacancies={content.vacancies} props={props}/>
		</MainContacts>
	);
};

export default ContactsSection;