import React from 'react';
import * as S from './ReplyStyles';

const getNameFromEmail = (email) => email?.split('@')[0];

export default function ReplyUI(props) {
  return (
    <>
      <S.CommentWrapper>
        {props.reply?.map((el, index) => {
          console.log(el.user);
          return (
            <S.Comment key={index}>
              <div>
                <span style={{ fontWeight: 'bold' }}>
                  {getNameFromEmail(el.user)}
                </span>
                <span>{el.text}</span>
              </div>
            </S.Comment>
          );
        })}
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
