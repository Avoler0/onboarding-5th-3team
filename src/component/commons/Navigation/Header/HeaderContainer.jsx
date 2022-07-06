import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderUI from './HeaderPresenter';

export default function Header({ toggleCreatePost }) {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('LoginUser');
    navigate('/');
  };

  return <HeaderUI logout={logout} toggleCreatePost={toggleCreatePost} />;
}
