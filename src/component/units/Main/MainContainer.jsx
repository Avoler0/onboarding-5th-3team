import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainPageUI from './MainPresenter';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPost = () => {
    axios
      .get('http://localhost:4000/posts')
      .then((res) => {
        setBoard(res.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('LoginUser') === null) {
      return useNavigate('/');
    }
    getPost();
  }, []);

  return <MainPageUI board={board} loading={loading} setLoading={setLoading} />;
}
