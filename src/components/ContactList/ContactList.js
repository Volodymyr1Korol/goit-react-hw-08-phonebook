import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { CircularProgress } from '@mui/material';
import {
  ContactButtom,
  ContactItem,
  ContactListContact,
  ContactText,
} from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListContact>
      {isLoading && <CircularProgress />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ContactText>Total contacts: {contacts.length}</ContactText>
      )}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>
              {name}:{number}
            </ContactText>
            <ContactButtom onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ContactButtom>
          </ContactItem>
        ))}
    </ContactListContact>
  );
}
