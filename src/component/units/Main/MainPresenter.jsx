import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import { getLoginUser } from '../../commons/utils/lib';
import Feed from './MainFeed';

export default function MainPageUI(props) {
  const [showReplyOverlay, setShowReplyOverlay] = useState(false);

  return (
    <>
      {props.board
        .sort((a, b) => b.id - a.id)
        .map((el) => {
          return (
            <Feed
              board={el}
              loading={props.loading}
              setLike={props.setLike}
              setLoading={props.setLoading}
              key={el.id}
            />
          );
        })}
    </>
  );
}
