import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsOperations';

// dispatch очікує на екшн, переджає його редʼюсеру, редʼюсер перевіряє тайп, і в залежності від тайпу змінює стейт
// dispatch(єкшнКріейтор(пейлоад))=>reducer(state, action)=>newState

import { PhonebookTitle, Wrapper } from './App.styled';

export const App = () => {
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
};
