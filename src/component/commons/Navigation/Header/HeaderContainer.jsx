import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderUI from './HeaderPresenter';

export default function Header() {
  let navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('LoginUser');
    navigate('/Login');
  };

  return <HeaderUI Logout={Logout} />;
}
