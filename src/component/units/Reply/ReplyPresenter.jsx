import React from 'react';
import * as S from './ReplyStyles';

export default function ReplyUI(props) {
  return (
    <>
      <S.CommentWrapper>
        {props.reply?.map((el, index) => (
          <S.Comment key={index}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{el.user} </span>
              <span>{el.text}</span>
            </div>
          </S.Comment>
        ))}
      </S.CommentWrapper>
      <form onSubmit={props.onSubmitReply}>
        <S.Form>
          <S.ReplyImg src="/smile.png" />
          <input
            ref={props.SubmitRef}
            type="text"
            placeholder="댓글을 입력해주세요."
          />
          <button>
            <div>게시</div>
          </button>
        </S.Form>
      </form>
    </>
  );
}
