import React from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import axios from 'axios';

export default function MainPageUI(props) {
  return (
    <>
      {props.board.map((el) => (
        <S.Wrapper load={props.loading} key={el.id}>
          <S.HeadWrapper>
            <S.UserImg></S.UserImg>
            <S.Head>{el.writer}</S.Head>
          </S.HeadWrapper>
          <S.MainImg src={el.image} onLoad={() => props.setLoading?.(true)} />
          <S.ButtonWrapper>
            <S.LikeImg
              id={el.id}
              onClick={async () => {
                await axios
                  .put(`http://localhost:4000/posts/${el.id}`, {
                    like: el.like + 1,
                    title: el.title,
                    writer: el.writer,
                    image: el.image,
                    reply: el.reply,
                  })
                  .then((res) => {
                    props.setLike((prev) => !prev);
                  });
              }}
              src="/Header/heart.png"
            />
            <S.CommentImg src="/comment.png" />
            <S.MsgImg src="/Header/send.png" />
          </S.ButtonWrapper>
          <S.Like>좋아요 {el.like}</S.Like>
          <Reply el={el} />
        </S.Wrapper>
      ))}
    </>
  );
}
