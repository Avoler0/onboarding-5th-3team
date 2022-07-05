import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import axios from 'axios';

export default function MainPageUI(props) {
  const [showReplyOverlay, setShowReplyOverlay] = useState(false);
  // console.log('클릭한 게시물', props.board);
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
                await FeedDataService.updateFeed({
                  ...el,
                  like: el.like + 1,
                }).then((res) => {
                  props.setLike((prev) => !prev);
                });
              }}
              src="/Header/heart.png"
            />
            <S.CommentImg src="/comment.png" />
            <S.MsgImg src="/Header/send.png" />
          </S.ButtonWrapper>
          <S.Like>좋아요 {el.like}</S.Like>
          <div onClick={() => setShowReplyOverlay((prev) => !prev)}>
              댓글 모두 보기 : {el.id}
            </div>
            <Reply el={el} />
          </S.Wrapper>
          <div>
            {showReplyOverlay && (
              <ReplyOverlay
                data={el}
                show={showReplyOverlay}
                setShow={setShowReplyOverlay}
              />
          <Reply el={el} />
        </S.Wrapper>
      ))}
    </>
  );
}
