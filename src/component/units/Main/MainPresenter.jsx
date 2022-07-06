import React, { useState } from 'react';
import * as S from './MainStyles';
import Reply from '../Reply/ReplyContainer';
import FeedDataService from '../../../services/DataService';
import ReplyOverlay from '../Reply/ReplyOverlay';
import axios from 'axios';
import { useEffect } from 'react';
import Feed from './MainFeed';
export default function MainPageUI({ board, loading, setLike, setLoading }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (board.length > 0) setIsLoading(false);
  }, [board]);
  if (isLoading) {
    return <div>로딩중</div>;
  }
  // console.log('클릭한 게시물', props.board);
  return (
    <>
      {board.map((data, index) => (
        <Feed
          board={data}
          loading={loading}
          setLike={setLike}
          setLoading={setLoading}
          key={data.id}
        />
      ))}
    </>
  );
}
