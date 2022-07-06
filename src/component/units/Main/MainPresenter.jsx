import React from 'react';
import Feed from './MainFeed';

export default function MainPageUI(props) {
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
