import React, { useState } from 'react';
import * as S from './CreatePostStyles';

export default function CreatePostUI({ text, setText, savePost, close }) {
  const imageURL = 'https://source.unsplash.com/random/600x500';
  return (
    <S.CreatePost
      onClick={(e) => {
        if (e.target == e.currentTarget) close();
      }}
    >
      <S.Wrapper>
        <S.Header>
          <h1>새 게시물 만들기</h1>
          <span onClick={savePost} style={{ color: 'skyblue' }}>
            공유하기
          </span>
        </S.Header>
        <S.Body className="body">
          <S.BodyLeft className="left">
            <S.Img src={imageURL}></S.Img>
          </S.BodyLeft>
          <S.BodyRight className="right">
            <S.UserInfo>
              <S.UserImg />
              <span>${localStorage.getItem('LoginUser')}</span>
            </S.UserInfo>
            <S.TextInput
              placeholder="문구 입력..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></S.TextInput>
            <S.LetterCount>{text.length}/2,200</S.LetterCount>
          </S.BodyRight>
        </S.Body>
      </S.Wrapper>
    </S.CreatePost>
  );
}
