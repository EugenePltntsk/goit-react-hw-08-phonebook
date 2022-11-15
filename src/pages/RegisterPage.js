import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

export default function RegisterPage() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const getData = e => {
    inputs[e.target.name](e.target.value);
  };

const dispatch = useDispatch();

const onSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password}))
}

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="name" onChange={getData} value={name} type="text" />
        <input name="email" onChange={getData} type="email" value={email} />
        <input name="password" onChange={getData} type="password" value={password} />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
