import React from 'react';
import { useState, useRef } from 'react';
import ReplyUI from './ReplyPresenter';

export default function ReplyPage() {
  const [reply, setReply] = useState([]);
  const SubmitRef = useRef(null);

  const onClickSubmit = (e) => {
    e.preventDefault();
    setReply([...reply, SubmitRef.current?.value]);
    SubmitRef.current.value = '';
  };

  return (
    <ReplyUI
      onClickSubmit={onClickSubmit}
      reply={reply}
      SubmitRef={SubmitRef}
    />
  );
}
