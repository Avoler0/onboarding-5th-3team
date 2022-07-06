import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import styled from 'styled-components';
import Layout from './component/commons/Navigation';
import Main from './pages/MainPage';

const Wrapper = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  height: 100%;
  overflow-y: scroll; // 없으면 화면 작을 때 흰 배경 나타남
`;

function App() {
  return (
    <Routes>
      <Route
        path="/main"
        element={
          <Layout>
            <Main />
          </Layout>
        }
      />
      <Route
        path="/"
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
