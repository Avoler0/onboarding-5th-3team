import React from 'react';
import * as S from './FooterStyles';

export default function FooterUI(props) {
  return (
    <S.Wrapper>
      <img src="/Header/home.png" />
      <img src="/Header/send.png" />
      <img src="/Header/add.png" />
      <img src="/Header/heart.png" />
      <img onClick={props.Logout} src="/Header/logout.png" />
    </S.Wrapper>
  );
}
