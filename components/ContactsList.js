import TitleContacts from "./blocks/TitleContacts";
import {
    Contact,
    ContactItem, ContactItemBody, ContactItemDescription, ContactItemTitle,
    ContactList,
    ContactsListWrapper,
    ContactWrapper
} from "../styles/contactsPage/ContactsListStyle";
import useWindowSize from "../hooks/useWindowSize";

const ContactsList = ({contacts, props}) => {
    const sizeWindows = useWindowSize()
    // console.log(sizeWindows.width)
    return (
        <ContactsListWrapper>
            <TitleContacts>Контакты</TitleContacts>
                <Contact {...props}>
                    <ContactWrapper {...props}>
                        <ContactList {...props}>
                            {contacts.map(({id, title, description}) => (
                                <ContactItem key={id} {...props}>
                                    <ContactItemBody {...props}>
                                        <ContactItemTitle {...props}>{title}</ContactItemTitle>
                                        <ContactItemDescription {...props}>{description}</ContactItemDescription>
                                    </ContactItemBody>
                                </ContactItem>
                            ))}
                        </ContactList>
                    </ContactWrapper>
                </Contact>
        </ContactsListWrapper>
    );
};

export default ContactsList;