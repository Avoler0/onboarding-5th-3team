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
          <span onClick={savePost} style={{ color: 'rgb(0,149,246)' }}>
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
              <span>
                {
                  JSON.parse(localStorage.getItem('LoginUser')).email.split(
                    '@'
                  )[0]
                }
              </span>
            </S.UserInfo>
            <S.TextInput
              placeholder="문구 입력..."
              onChange={(e) => {
                if (e.target.value.length <= 2200) setText(e.target.value);
                else {
                  const limitedText = text.slice(0, 2200);
                  setText(limitedText);
                  e.value = limitedText;
                }
              }}
              value={text}
            ></S.TextInput>
            <S.LetterCount>
              {text.length.toLocaleString('en-US')}/2,200
            </S.LetterCount>
          </S.BodyRight>
        </S.Body>
      </S.Wrapper>
    </S.CreatePost>
  );
}
