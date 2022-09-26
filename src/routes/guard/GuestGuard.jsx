import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const GuestGuard = ({ element }) => {
  const { isAuth, me } = useSelector((state) => state.auth);
  const { roles } = me;

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  if (isAuth && roles?.includes('admin')) {
    return <Navigate to='/admin' />;
  }

  return element;
};

export default GuestGuard;
