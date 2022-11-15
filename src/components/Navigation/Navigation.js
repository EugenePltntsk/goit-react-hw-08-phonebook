import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation(props) {
  return (
    <ul>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
}