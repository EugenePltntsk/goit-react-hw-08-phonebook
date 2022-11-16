import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export default function LoginPage() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const inputs = {
    email: setEmail,
    password: setPassword,
  };

  const getData = e => {
    inputs[e.target.name](e.target.value);
  };

const dispatch = useDispatch();

const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password}))
}

  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="enter your email" name="email" onChange={getData} type="email" value={email} />
        <input placeholder="enter your password" name="password" onChange={getData} type="password" value={password} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
