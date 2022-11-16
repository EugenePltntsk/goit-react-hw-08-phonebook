import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/auth/authOperations'

export default function UserMenu() {

    const dispatch=useDispatch();

    const logout = () => {
        dispatch(logoutThunk());
    }

const {name, email} = useSelector(state => state.auth.user)

  return (
    <div>
    <p>{name}</p>
    <p>{email}</p>
    <button type="button" onClick={logout}>Logout</button>
  </div>
  )
}
