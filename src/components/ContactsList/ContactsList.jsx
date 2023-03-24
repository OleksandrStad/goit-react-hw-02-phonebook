import ProTypes from 'prop-types';
import { DeleteBtn, ContactItem } from "./ContactsList.styled";


export const ContactsList = ({ contacts, onDeletContact }) => (
    <ul >
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
                <p>{name}: {number} </p>
                <DeleteBtn type='button ' onClick={() => onDeletContact(id)}>
                    Delete
                </DeleteBtn >
            </ContactItem>
        ))}
    </ul >
);

ContactsList.ProTypes = {
    contacts: ProTypes.arrayOf(ProTypes.object).isRequired,
    onDeletContact: ProTypes.func.isRequired,
};

