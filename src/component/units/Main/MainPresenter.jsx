import React from 'react';
import * as S from './MainStyles';
import Reply from '../Reply';

export default function MainPageUI(props) {
  return (
    <>
      {!props.loading && <S.Loading>Image Loading...</S.Loading>}
      {props.board.map((el) => (
        <S.Wrapper key={el.id}>
          <S.HeadWrapper>
            <S.UserImg></S.UserImg>
            <S.Head>{el.writer}</S.Head>
          </S.HeadWrapper>
          <S.MainImg src={el.image} onLoad={() => props.setLoading?.(true)} />
          <S.ButtonWrapper>
            <S.LikeImg src="/Header/heart.png" />
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
