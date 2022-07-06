import React from 'react';
import { useState, useRef, useEffect } from 'react';
import FeedDataService from '../../../services/DataService';
import { getLoginUser } from '../../commons/utils/lib';
import ReplyUI from './ReplyPresenter';

export default function ReplyPage(props) {
  const [reply, setReply] = useState(props.el.reply);
  const [feed, setFeed] = useState(props.el);
  const SubmitRef = useRef(null);

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
    setFeed(data);
  };

  const getReply = () => {
    FeedDataService.getFeed(feed.id)
      .then((res) => {
        setReply(res.data.reply);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(getReply, []);

  return (
    <ReplyUI
      onSubmitReply={onSubmitReply}
      reply={reply}
      SubmitRef={SubmitRef}
    />
  );
}
