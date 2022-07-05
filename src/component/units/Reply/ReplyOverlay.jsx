import React from 'react';
import styled from 'styled-components';
import * as S from './ReplyStyles';

export default function Overlay(props) {
  return (
    <S.Overlay>
      <S.ReplyWrapper
        style={{ width: '1200px', height: '500px', backgroundColor: 'white' }}
      ></S.ReplyWrapper>
    </S.Overlay>
  );
}
