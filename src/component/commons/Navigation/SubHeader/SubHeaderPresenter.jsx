import React from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../media';
import * as S from '../Header/HeaderStyles';

const iconArr = [
  { path: '/Header/home.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/add.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/position.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/heart.png', onClick: false, isDesktopOnly: true },
  { path: '/Header/logout.png', onClick: 'logout', isDesktopOnly: true },
];

const Container = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export default function SubHeaderUI(props) {
  return (
    <Container>
      <S.Wrapper>
        <S.NavIcon isSubHeader>
          {iconArr.map((icon) => (
            <S.Icon
              key={icon.path}
              src={icon.path}
              onClick={icon.onClick && props.Logout}
            />
          ))}
        </S.NavIcon>
      </S.Wrapper>
    </Container>
  );
}
