import React from 'react';
import * as S from './HeaderStyles';

export default function HeaderUI({ logout, toggleCreatePost }) {
  const iconArr = [
    { path: '/Header/home.png', onClick: undefined, isDesktopOnly: true },
    { path: '/Header/send.png', onClick: undefined, isDesktopOnly: false },
    {
      path: '/Header/add.png',
      onClick: toggleCreatePost,
      isDesktopOnly: true,
    },
    { path: '/Header/position.png', onClick: undefined, isDesktopOnly: true },
    { path: '/Header/heart.png', onClick: undefined, isDesktopOnly: true },
    { path: '/Header/logout.png', onClick: logout, isDesktopOnly: true },
  ];
  return (
    <>
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
                onClick={icon.onClick ? icon.onClick : undefined}
                isDesktopOnly={icon.isDesktopOnly}
              />
            ))}
          </S.NavIcon>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
