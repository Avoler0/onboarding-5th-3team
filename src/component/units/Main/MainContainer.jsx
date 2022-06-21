import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Reply from '../Reply';

const Wrapper = styled.div`
  width: 40%;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 1px -1px lightgray;
`;
const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: gray;
`;
const Head = styled.div`
  margin-left: 10px;
`;
const MainImg = styled.img`
  width: 100%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin: 10px 0px 20px 10px;
  display: flex;
  justify-content: flex-start;
`;
const LikeImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
const CommentImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
const MsgImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
const Like = styled.div`
  margin: 0px 10px 10px 10px;
  font-size: 8px;
`;

const ReplyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ReplyImg = styled.img`
  width: 3%;
  margin: 0px 3px 0px 10px;
`;
const ReplyInput = styled.input`
  width: 80%;
  background-color: none;
  ::placeholder {
    font-size: 10px;
  }
`;
const SubmitComment = styled.button`
  background-color: white;
  font-size: 10px;
  color: #3e99df;
`;
export default function MainPage() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const post = await axios.get('http://localhost:4000/posts');
        setBoard(post.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <>
      {board.map((el) => (
        <Wrapper key={el.id}>
          <HeadWrapper>
            <UserImg></UserImg>
            <Head>{el.writer}</Head>
          </HeadWrapper>
          <MainImg src={el.image} />
          <ButtonWrapper>
            <LikeImg src="/Header/heart.png" />
            <CommentImg src="/comment.png" />
            <MsgImg src="/Header/send.png" />
          </ButtonWrapper>
          <Like>좋아요 {el.like}</Like>
          <Reply />
        </Wrapper>
      ))}
    </>
  );
}
