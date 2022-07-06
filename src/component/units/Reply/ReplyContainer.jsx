import React from 'react';
import { useState, useRef, useEffect } from 'react';
import FeedDataService from '../../../services/DataService';
import { getLoginUser } from '../../commons/utils/lib';
import ReplyUI from './ReplyPresenter';

export default function ReplyPage(props) {
  const [reply, setReply] = useState(props.el.reply);
  const SubmitRef = useRef(null);

  const splitEmail = (email) => email.split('@')[0];

  const onSubmitReply = async (e) => {
    e.preventDefault();
    setReply([...reply, SubmitRef.current?.value]);
    await postReply(props.el, {
      user: splitEmail(getLoginUser().email),
      text: SubmitRef.current?.value,
    });
    SubmitRef.current.value = '';
    getReply();
  };

  const postReply = async (prevFeed, newComment) => {
    await FeedDataService.updateFeed(prevFeed, newComment);
  };

  const getReply = () => {
    FeedDataService.getFeed(props.el.id)
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
