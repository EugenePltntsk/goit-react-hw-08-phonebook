import { PhonebookTitle, Wrapper } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsOperations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
