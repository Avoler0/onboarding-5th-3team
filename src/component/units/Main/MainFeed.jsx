import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import { getLoginUser } from '../../commons/utils/lib';

export default function MainFeed(props) {
  const { board, loading, setLike, setLoading } = props;
  const { id, image, like, reply, title, writer } = board;

  const [showReplyOverlay, setShowReplyOverlay] = useState(false);
  const hasLike = getLoginUser().like[id];
  return (
    <S.Wrapper load={props.loading} key={id}>
      <S.HeadWrapper>
        <S.UserImg></S.UserImg>
        <S.Head>{writer}</S.Head>
      </S.HeadWrapper>
      <S.MainImg src={image} onLoad={() => props.setLoading?.(true)} />
      <S.ButtonWrapper>
        <S.LikeImg
          id={id}
          hasLike={hasLike}
          onClick={async () => {
            await FeedDataService.toggleLike(props.board).then((res) => {
              props.setLike((prev) => !prev);
            });
          }}
        >
          {hasLike ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
        </S.LikeImg>
        <S.CommentImg src="/comment.png" />
        <S.MsgImg src="/Header/send.png" />
      </S.ButtonWrapper>
      <S.Like>좋아요 {like}</S.Like>
      <div onClick={() => setShowReplyOverlay((prev) => !prev)}>
        오버레이 보기 : {id}
      </div>
      <Reply el={board} />
      {showReplyOverlay && (
        <ReplyOverlay
          data={board}
          show={showReplyOverlay}
          setShow={setShowReplyOverlay}
        />
      )}
    </S.Wrapper>
  );
}
