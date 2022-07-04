import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReplyUI from './ReplyPresenter';
import axios from 'axios';
export default function ReplyPage(props) {
  const [reply, setReply] = useState([]);
  const SubmitRef = useRef(null);

  const onSubmitReply = async (e) => {
    e.preventDefault();
    setReply([...reply, SubmitRef.current?.value]);
    await axios.put(`http://localhost:4000/posts/${props.el.id}`, {
      like: props.el.like,
      image: props.el.image,
      writer: props.el.writer,
      title: props.el.title,
      reply: [...reply, SubmitRef.current?.value],
    });
    SubmitRef.current.value = '';
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/${props.el.id}`)
      .then((res) => {
        setReply(res.data.reply);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <ReplyUI
      onSubmitReply={onSubmitReply}
      reply={reply}
      SubmitRef={SubmitRef}
    />
  );
}
