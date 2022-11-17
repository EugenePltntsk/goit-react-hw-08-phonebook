import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/auth/authOperations'
import { LogoutButton } from './UserMenu.styled';

export default function UserMenu() {

    const dispatch=useDispatch();

    const logout = () => {
        dispatch(logoutThunk());
    }

const {name, email} = useSelector(state => state.auth.user)

  return (
    <div>
    <p>Welcome, {name}</p>
    <p>{email}</p>
    <LogoutButton type="button" onClick={logout}>Logout</LogoutButton>
  </div>
  )
}
