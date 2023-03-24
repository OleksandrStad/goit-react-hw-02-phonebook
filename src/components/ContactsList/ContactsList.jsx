import ProTypes from 'prop-types';
import { ContactItem } from "./ContactsList.styled"


export const ContactsList = ({ contacts, }) => (
    <ul >
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
                <p>{name}: {number} </p>

            </ContactItem>
        ))}
    </ul >
);

ContactsList.ProTypes = {
    contacts: ProTypes.arrayOf(ProTypes.object).isRequired,
};

