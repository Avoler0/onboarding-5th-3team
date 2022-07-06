import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import styled from 'styled-components';
import Layout from './component/commons/Navigation';
import Main from './pages/MainPage';
import { useState } from 'react';

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
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const toggleCreatePost = () => {
    setIsCreatePostOpen(!isCreatePostOpen);
  };
  return (
    <Routes>
      <Route
        path="/main"
        element={
          <Layout toggleCreatePost={toggleCreatePost}>
            <Main
              toggleCreatePost={toggleCreatePost}
              isCreatePostOpen={isCreatePostOpen}
            />
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
