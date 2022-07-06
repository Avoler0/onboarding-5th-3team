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
    <S.Overlay>
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={(e) => {
          if (e.target == e.currentTarget) setShow(false);
        }}
      >
        <S.OverlayReply>
          <S.FeedImg src={image}></S.FeedImg>
          <S.FeedContent>
            <S.Header>
              <S.IcoCircle />
              <span>{getNameFromEmail(writer)}</span>
            </S.Header>
            <S.Contents id="middle">
              {feed.reply.map((data) => (
                <S.Content key={data.id}>
                  <div>
                    <S.HIco id="icon">
                      <S.IcoCircle small />
                    </S.HIco>
                  </div>
                  <S.HName
                    style={{ display: 'inline-flex', marginRight: '5px' }}
                  >
                    <span>{getNameFromEmail(data.user)}</span>
                  </S.HName>
                  <S.ReplyContent>{data.text}</S.ReplyContent>
                </S.Content>
              ))}
            </S.Contents>
            <S.Menu>
              <S.Icon>
                <img src="Header/heart.png" />
                <span> {feed.like}개</span>
              </S.Icon>
              <S.Icon>
                <img src="comment.png" />
              </S.Icon>
              <S.Icon>
                <img src="Header/send.png" />
              </S.Icon>
            </S.Menu>
            <S.Form id="writing" onSubmit={onSubmitReply}>
              <S.ReplyImg src="/smile.png" />
              <S.ReplyInput
                ref={SubmitRef}
                type="text"
                placeholder="댓글을 입력해주세요."
              />
              <S.Submit>게시</S.Submit>
            </S.Form>
          </S.FeedContent>
        </S.OverlayReply>
      </div>
    </S.Overlay>
  );
}
