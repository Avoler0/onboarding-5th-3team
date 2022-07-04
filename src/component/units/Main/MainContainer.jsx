import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageUI from './MainPresenter';
import axios from 'axios';

export default function MainPage() {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  let navigate = useNavigate();

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
    localStorage.getItem('LoginUser') === null ? navigate('/') : getPost();
  }, [like]);

  return (
    <MainPageUI
      setLike={setLike}
      board={board}
      loading={loading}
      setLoading={setLoading}
    />
  );
}
