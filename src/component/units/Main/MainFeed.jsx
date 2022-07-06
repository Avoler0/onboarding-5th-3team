import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import axios from 'axios';

export default function MainFeed({ board, loading, setLike, setLoading }) {
  const { id, image, like, reply, title, writer } = board;
  const [showReplyOverlay, setShowReplyOverlay] = useState(false);
  
  return (
    <S.Wrapper load={loading} key={id}>
      <S.HeadWrapper>
        <S.UserImg></S.UserImg>
        <S.Head>{writer}</S.Head>
      </S.HeadWrapper>
      <S.MainImg src={image} onLoad={() => setLoading?.(true)} />
      <S.ButtonWrapper>
        <S.LikeImg
          id={id}
          onClick={async () => {
            await FeedDataService.updateFeed({
              ...board,
              like: like + 1,
            }).then((res) => {
              setLike((prev) => !prev);
            });
          }}
          src="/Header/heart.png"
        />
        <S.CommentImg src="/comment.png" />
        <S.MsgImg src="/Header/send.png" />
      </S.ButtonWrapper>
      <S.Like>좋아요 {like}</S.Like>
      <div onClick={() => setShowReplyOverlay((prev) => !prev)}>
        댓글 모두 보기 : {id}
      </div>
      <Reply el={board} />
      <div>
        {showReplyOverlay && (
          <ReplyOverlay
            data={board}
            show={showReplyOverlay}
            setShow={setShowReplyOverlay}
          />
        )}
      </div>
    </S.Wrapper>
  );
}
