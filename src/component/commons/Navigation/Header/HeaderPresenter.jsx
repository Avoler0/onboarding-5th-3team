import React from 'react';
import * as S from './HeaderStyles';

export default function HeaderUI(props) {
  return (
    <S.Wrapper>
      <S.MainImg src="/Login/instargram.png" />
      <S.InputWrapper>
        <S.SearchImg src="/Header/search.png" />
        <S.Input />
      </S.InputWrapper>
      <S.NavIcon>
        <S.Home src="/Header/home.png" />
        <S.Msg src="/Header/send.png" />
        <S.Write src="/Header/add.png" />
        <S.Navi src="/Header/position.png" />
        <S.Pick src="/Header/heart.png" />
        <S.Logout onClick={props.Logout} src="/Header/logout.png" />
      </S.NavIcon>
    </S.Wrapper>
  );
}
