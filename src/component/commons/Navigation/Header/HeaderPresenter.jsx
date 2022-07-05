import React from 'react';
import * as S from './HeaderStyles';

const iconArr = [
  { path: '/Header/home.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/send.png', onClick: false, isDesktopOnly: false },
  { path: '/Header/add.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/position.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/heart.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/logout.png', onClick: 'logout', isDesktopOnly: true },
];

export default function HeaderUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MobileIcon src="/Header/camera.png" />
        <S.MainImg src="/Login/instargram.png" />

        <S.InputWrapper>
          <S.SearchImg src="/Header/search.png" />
          <S.Input placeholder="검색" />
        </S.InputWrapper>

        <S.NavIcon>
          {iconArr.map((icon) => (
            <S.Icon
              key={icon.path}
              src={icon.path}
              onClick={icon.onClick && props.Logout}
              isDesktopOnly={icon.isDesktopOnly}
            />
          ))}
        </S.NavIcon>
      </S.Wrapper>
    </S.Container>
  );
}
