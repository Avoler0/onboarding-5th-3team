import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import styled from 'styled-components';
import Layout from './component/commons/Navigation';
import Main from './pages/MainPage';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <MainWrapper>
              <Main />
            </MainWrapper>
          </>
        }
      />
      <Route
        path="/Login"
        element={
          <Wrapper>
            <Login />
          </Wrapper>
        }
      />
    </Routes>
  );
}
export default App;
