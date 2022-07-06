import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './ReplyStyles';

export default function Overlay({ data, show, setShow }) {

  const { id, image, like, title, writer } = data;
  const [reply, setReply] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:4000/posts/${id}`)
    //   .then((res) => {
    //     setReply(res.data.reply);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    // 스크롤 방지
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  reply.map((data) => {
    console.log(data.user.split('@', 1));
  });
  return (
    <>
      <S.Overlay
        onClick={() => {
          setShow(false);
        }}
      ></S.Overlay>

      <S.OverlayReply>
        <S.FeedImg>
          <img
            src={image}
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </S.FeedImg>
        <S.FeedContent>
          <S.Header>
            <S.HIco>
              <div>
                <S.IcoCircle />
              </div>
            </S.HIco>
            <S.HName>
              <span>
                {writer}
                {id}
              </span>
            </S.HName>
          </S.Header>
          <S.Middle>
            <S.Content style={{ display: 'flex' }}>
              <S.User>
                <S.HIco id="icon">
                  <div>
                    <S.IcoCircle />
                  </div>
                </S.HIco>
              </S.User>
              <S.HName style={{ display: 'inline-flex', marginRight: '5px' }}>
                <span>{writer}</span>
              </S.HName>
              <S.ReplyContent>글 내용</S.ReplyContent>
            </S.Content>
            {reply.map((data, index) => (
              <S.Content key={index}>
                <S.User>
                  <S.HIco id="icon">
                    <div>
                      <S.IcoCircle />
                    </div>
                  </S.HIco>
                </S.User>
                <S.HName style={{ display: 'inline-flex', marginRight: '5px' }}>
                  <span>{data.user.split('@', 1)}</span>
                </S.HName>
                <S.ReplyContent>{data.text}</S.ReplyContent>
              </S.Content>
            ))}
          </S.Middle>
          <S.Menu>
            <S.MSection>
              <S.MIcon style={{ marginLeft: '-8px' }}>
                <img src="Header/heart.png" />
              </S.MIcon>
              <S.MIcon>
                <img src="comment.png" />
              </S.MIcon>
              <S.MIcon>
                <img src="Header/send.png" />
              </S.MIcon>
              <S.MIcon></S.MIcon>
            </S.MSection>
            <S.MSection style={{ padding: '0 16px 0 16px', border: '0' }}>
              좋아요 100개
            </S.MSection>
            <div
              style={{
                padding: '15px 16px 0 16px',
                fontSize: '9px',
                color: 'gray',
              }}
            >
              2일 전
            </div>
          </S.Menu>
          <S.Writing>
            <S.Form onSubmit={(e) => e.preventDefault()}>
              <img src="/smile.png" />
              <input placeholder="댓글 달기..."></input>
              <button>
                <div>게시</div>
              </button>
            </S.Form>
          </S.Writing>
        </S.FeedContent>
      </S.OverlayReply>
    </>
  );
}
