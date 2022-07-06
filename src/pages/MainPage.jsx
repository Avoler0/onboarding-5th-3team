import React from 'react';
import MainPage from '../component/units/Main/MainContainer';

export default function Main({ toggleCreatePost, isCreatePostOpen }) {
  return (
    <MainPage
      toggleCreatePost={toggleCreatePost}
      isCreatePostOpen={isCreatePostOpen}
    />
  );
}
