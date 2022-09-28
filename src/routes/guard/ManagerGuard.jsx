import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ManagerGuard = ({ element }) => {
  const { isAuth, me } = useSelector((state) => state.auth);
  const { permissions } = me;
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  if (isAuth && !location.pathname.includes('/admin')) {
    if (permissions.includes('payment')) {
      return <Navigate to="/admin/payment" />;
    } else if (permissions.includes('qa')) {
      return <Navigate to="/admin/q&a" />;
    } else if (permissions.includes('admin')) {
      return <Navigate to="/admin" />;
    }
  }

  return element;
};

export default ManagerGuard;
