import React, { useState } from 'react';
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
