import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageUI from './MainPresenter';
import FeedDataService from '../../../services/DataService';
import CreatePostContainer from '../CreatePost/CreatePostContainer';

export default function MainPage({ toggleCreatePost, isCreatePostOpen }) {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const imageURL = 'https://source.unsplash.com/random/600x500';
  let navigate = useNavigate();

  const getPost = async () => {
    await FeedDataService.getFeeds()
      .then((res) => {
        setBoard(res.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const savePost = async (text) => {
    const data = {
      like: 0,
      title: null,
      writer: localStorage.getItem('LoginUser'),
      image: imageURL,
      text: text,
      reply: [],
    };
    await FeedDataService.postFeed(data).catch((error) => {
      alert(error.message);
    });
  };

  useEffect(() => {
    localStorage.getItem('LoginUser') === null ? navigate('/') : getPost();
  }, [like]);

  return (
    <>
      <MainPageUI
        setLike={setLike}
        board={board}
        loading={loading}
        setLoading={setLoading}
      />
      {isCreatePostOpen ? (
        <CreatePostContainer
          close={() => toggleCreatePost()}
          savePost={savePost}
          getPost={getPost}
        />
      ) : null}
    </>
  );
}
