import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ManagerGuard = ({ element }) => {
  const { isAuth, me } = useSelector((state) => state.auth);
  const { isAdmin } = me;

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  if (isAuth && !isAdmin) {
    return <Navigate to='/' />;
  }

  return element;
};

export default ManagerGuard;
