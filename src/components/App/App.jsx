import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { Navigation } from 'components/Navigation/Navigation';
import { currentUserThunk } from 'redux/auth/authOperations';
import UserMenu from 'components/UserMenu/UserMenu';
import { isLoggedInSelector } from 'redux/selectors';
// import ContactsPage from 'pages/ContactsPage';
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>

      <Navigation />
      { isLoggedIn && <UserMenu/>}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
