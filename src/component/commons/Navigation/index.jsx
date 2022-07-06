import React from 'react';
import styled from 'styled-components';
import Header from './Header/HeaderContainer';
import SubHeader from './SubHeader/SubHeaderContainer';

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: #efefef;
`;
const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Layout({ children, toggleCreatePost }) {
  return (
    <>
      <Container>
        <Header toggleCreatePost={toggleCreatePost} />
        <Div>{children}</Div>
        <SubHeader />
      </Container>
    </>
  );
}
