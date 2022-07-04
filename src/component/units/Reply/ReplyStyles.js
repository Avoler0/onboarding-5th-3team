import styled from 'styled-components';

export const ReplyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ReplyImg = styled.img`
  width: 3%;
  margin: 0px 3px 0px 10px;
`;
export const ReplyInput = styled.input`
  width: 80%;
  background-color: none;
  ::placeholder {
    font-size: 10px;
  }
`;
export const Submit = styled.button`
  background-color: white;
  font-size: 10px;
  cursor: pointer;
  color: #3e99df;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const Comment = styled.div`
  font-size: 10px;
`;
