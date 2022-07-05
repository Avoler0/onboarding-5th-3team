import React from 'react';
import { useNavigate } from 'react-router-dom';

import FooterUI from './FooterPresenter';

export default function Footer() {
  let navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('LoginUser');
    navigate('/');
  };

  return <FooterUI Logout={Logout} />;
}
