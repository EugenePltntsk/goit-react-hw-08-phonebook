import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsOperations';
import { Route, Router, Routes } from 'react-router-dom';

// dispatch очікує на екшн, переджає його редʼюсеру, редʼюсер перевіряє тайп, і в залежності від тайпу змінює стейт
// dispatch(єкшнКріейтор(пейлоад))=>reducer(state, action)=>newState

import { PhonebookTitle, Wrapper } from './App.styled';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { Navigation } from 'components/Navigation/Navigation';

export const App = () => {

  
  

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
    
  );
};
