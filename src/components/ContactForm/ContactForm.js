import { useState } from 'react';
import { Form, FormInput, FormButtom } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleAddContact = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name.trim())) {
      Notiflix.Notify.warning('This name is taken!', {
        position: 'center-top',
      });
      return;
    }
    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormInput
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
        placeholder="Enter contact name"
        margin={'normal'}
        label="Name"
      />

      <FormInput
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
        placeholder="111-111-1111"
      />

      <FormButtom
        type="submit"
        size="large"
        sx={{ mt: 3, border: '1px solid black' }}
      >
        Add contact
      </FormButtom>
    </Form>
  );
}
