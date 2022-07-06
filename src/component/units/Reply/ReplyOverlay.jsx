import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import FeedDataService from '../../../services/DataService';
import { getLoginUser } from '../../commons/utils/lib';
import * as S from './ReplyStyles';
import { getNameFromEmail } from '../../commons/utils/lib';
import { ReactComponent as HeartIco } from '../../../SVG/instagram-heart.svg';
import { ReactComponent as HeartIcoFill } from '../../../SVG/instagram-heart2.svg';
import { ReactComponent as CommentIco } from '../../../SVG/instagram-comment.svg';
import { ReactComponent as ShareIco } from '../../../SVG/instagram-share.svg';

export default function Overlay({ data, show, setShow, setLike }) {
  const { id, image, like, title, writer } = data;
  const [reply, setReply] = useState([]);
  const [feed, setFeed] = useState(data);
  const SubmitRef = useRef(null);
  const hasLike = getLoginUser().like[id];
  function getReply() {
    FeedDataService.getFeed(id)
      .then((res) => {
        setReply(res.data.reply);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  console.log('피드', feed);
  const onSubmitReply = async (e) => {
    // 댓글 추가
    e.preventDefault();
    setReply([...reply, SubmitRef.current?.value]);
    await postReply(feed, {
      user: getLoginUser().email,
      text: SubmitRef.current?.value,
    });
    SubmitRef.current.value = '';
    getReply();
  };
  const postReply = async (prevFeed, newComment) => {
    const { data } = await FeedDataService.updateFeed(prevFeed, newComment);
    setFeed(() => data);
  };
  useEffect(() => {
    getReply();
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

  return (
    <S.Overlay
      onClick={(e) => {
        if (e.target == e.currentTarget) setShow(false);
      }}
    >
      <S.OverlayReply>
        <S.FeedImg>
          <img
            src={image}
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
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
              <span>{getNameFromEmail(writer)}</span>
            </S.HName>
          </S.Header>
          <S.Middle id="middle">
            {feed.reply.map((data) => (
              <S.Content key={data.id}>
                <S.User>
                  <S.HIco id="icon">
                    <div>
                      <S.IcoCircle />
                    </div>
                  </S.HIco>
                </S.User>
                <S.HName style={{ display: 'inline-flex', marginRight: '5px' }}>
                  <span>{getNameFromEmail(data.user)}</span>
                </S.HName>
                <S.ReplyContent>{data.text}</S.ReplyContent>
              </S.Content>
            ))}
          </S.Middle>
          <S.Menu>
            <S.MSection>
              <S.MIcon
                style={{ marginLeft: '-8px' }}
                id={id}
                hasLike={hasLike}
                onClick={async () => {
                  await FeedDataService.toggleLike(data).then((res) => {
                    setLike((prev) => !prev);
                  });
                }}
              >
                {hasLike ? <HeartIcoFill fill="red" /> : <HeartIco />}
              </S.MIcon>
              <S.MIcon>
                <CommentIco />
              </S.MIcon>
              <S.MIcon>
                <ShareIco />
              </S.MIcon>
              <S.MIcon></S.MIcon>
            </S.MSection>
            <S.MSection>좋아요 {like}개</S.MSection>
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
          <S.Writing id="writing">
            <S.Form onSubmit={onSubmitReply}>
              <S.ReplyWrapper>
                <S.ReplyImg src="/smile.png" />
                <S.ReplyInput
                  ref={SubmitRef}
                  type="text"
                  placeholder="댓글을 입력해주세요."
                />
                <S.Submit>
                  <div>게시</div>
                </S.Submit>
              </S.ReplyWrapper>
            </S.Form>
          </S.FeedContent>
        </S.OverlayReply>
      </div>
    </S.Overlay>
  );
}
