import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import { getLoginUser, getNameFromEmail } from '../../commons/utils/lib';
import { ReactComponent as HeartIco } from '../../../SVG/instagram-heart.svg';
import { ReactComponent as CommentIco } from '../../../SVG/instagram-comment.svg';
import { ReactComponent as ShareIco } from '../../../SVG/instagram-share.svg';
export default function MainFeed(props) {
  const { board, loading, setLike, setLoading } = props;
  const { id, image, like, reply, title, writer, text } = board;
  const [isFullTextShown, setIsFullTextShown] = useState(false);
  const [showReplyOverlay, setShowReplyOverlay] = useState(false);
  const hasLike = getLoginUser().like[id];
  return (
    <S.Wrapper load={props.loading} key={id}>
      <S.HeadWrapper>
        <S.UserImg></S.UserImg>
        <S.Head>{getNameFromEmail(writer)}</S.Head>
      </S.HeadWrapper>
      <S.MainImg src={image} onLoad={() => props.setLoading?.(true)} />
      <S.ButtonWrapper>
        <S.MSection>
          <S.MIcon
            style={{ marginLeft: '-8px' }}
            id={id}
            hasLike={hasLike}
            onClick={async () => {
              await FeedDataService.toggleLike(props.board).then((res) => {
                props.setLike((prev) => !prev);
              });
            }}
          >
            {hasLike ? <HeartIco fill="red" /> : <HeartIco />}
          </S.MIcon>
          <S.MIcon>
            <CommentIco />
          </S.MIcon>
          <S.MIcon>
            <ShareIco />
          </S.MIcon>
        </S.MSection>
      </S.ButtonWrapper>
      <S.Text
        className="text"
        style={{
          height: isFullTextShown ? 'fit-content' : '30px',
          whiteSpace: isFullTextShown ? 'normal' : 'nowrap',
        }}
        onClick={() => {
          setIsFullTextShown(!isFullTextShown);
        }}
      >
        {text ? text : null}
      </S.Text>
      <S.Like>좋아요 {like}개</S.Like>
      <S.ReplyShow onClick={() => setShowReplyOverlay((prev) => !prev)}>
        오버레이 보기
      </S.ReplyShow>
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
