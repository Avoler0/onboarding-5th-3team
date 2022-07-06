import React from 'react';
import { useState } from 'react';
import * as S from './ReplyStyles';

const getNameFromEmail = (email) => email?.split('@')[0];

export default function ReplyUI(props) {
  const [showAll, setShowAll] = useState(false);

  const hideReply = (reply) => reply.length > 2;

  return (
    <>
      <S.CommentWrapper>
        {props.reply?.map((el, index) => {
          return (
            <S.Comment key={index} isDisplay={index < 3 || showAll}>
              <span style={{ fontWeight: 'bold' }}>
                {getNameFromEmail(el.user)}
              </span>
              <span>{el.text}</span>
            </S.Comment>
          );
        })}
        {!showAll && hideReply(props.reply) && (
          <S.Button onClick={() => setShowAll((prev) => !prev)}>
            ... <span>+{props.reply.length - 3}</span>
          </S.Button>
        )}
      </S.CommentWrapper>
      <form onSubmit={props.onSubmitReply}>
        <S.ReplyWrapper>
          <S.ReplyImg src="/smile.png" />
          <S.ReplyInput
            ref={props.SubmitRef}
            type="text"
            placeholder="댓글을 입력해주세요."
          />
          <S.Submit>게시</S.Submit>
        </S.ReplyWrapper>
      </form>
    </>
  );
}
