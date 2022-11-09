import React from 'react';
import {TitleContactsStyle, TitleContactsText} from "../../styles/contactsPage/TitleContactsStyle";

const TitleContacts = ({children}) => {
    return (
        <TitleContactsStyle >
            <TitleContactsText>{children}</TitleContactsText>
        </TitleContactsStyle>
    );
};

export default TitleContacts;