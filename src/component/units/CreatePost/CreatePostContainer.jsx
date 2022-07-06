import React from 'react';
import { useEffect, useState, useRef } from 'react';
import CreatePostUI from './CreatePostPresenter';

export default function CreatePostContainer({ savePost, getPost, close }) {
  const [text, setText] = useState('');

  return (
    <CreatePostUI
      text={text}
      setText={setText}
      savePost={() => {
        savePost(text);
        close();
      }}
      close={close}
    />
  );
}
