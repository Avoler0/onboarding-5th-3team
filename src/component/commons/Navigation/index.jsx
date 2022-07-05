import React from 'react';
import styled from 'styled-components';
import Header from './Header/HeaderContainer';
import SubHeader from './SubHeader/SubHeaderContainer';

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <SubHeader />
    </Container>
  );
}
