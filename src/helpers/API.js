import axios from 'axios';
axios.defaults.baseURL = 'https://637268a1348e947299f4c3c6.mockapi.io/';

export const getContacts = async () => {
  const { data } = await axios.get('/Phonebook');
  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post('/Phonebook', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/Phonebook/${id}`);
  return data;
};
