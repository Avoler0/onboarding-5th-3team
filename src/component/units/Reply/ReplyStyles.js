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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const OverlayReply = styled.div`
  display: flex;
  align-items: center;
  width: 110vh;
  height: 90vh;
  margin: 5vh auto;
  background-color: white;
  border-radius: 0 4px 4px 0;
  z-index: 11;
`;
export const FeedImg = styled.div`
  background-color: black;
  width: 60%;
  height: 100%;
`;

export const FeedContent = styled.div`
  min-width: 40%;
  min-height: 100%;
  border-radius: 0 4px 4px 0;
  border: 1px solid #c7c2c2;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 5px;
  height: 50px;
  border-bottom: 1px solid #c7c2c2;
`;
export const HIco = styled.div`
  display: table;
  vertical-align: middle;

  margin-left: 10px;
  div {
    display: table-cell;
    vertical-align: middle;
  }
`;
export const IcoCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: gray;
`;
export const HName = styled.div`
  display: table;
  margin-left: 10px;
  span {
    display: table-cell;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }
`;
export const Middle = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  height: 75%;
`;
export const User = styled.div``;
export const Content = styled.div`
  display: flex;
  margin: 3px 0;
  line-height: 20px;
  text-align: center;
`;
export const ReplyContent = styled.div`
  display: inline;
  font-size: 12px;
`;
export const Menu = styled.div`
  height: 13%;
`;
export const MSection = styled.section`
  border-top: 1px solid #c7c2c2;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
`;
export const MIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
  }
`;
export const Writing = styled.div`
  padding: 6px 16px;
  padding: 6px 16px;
  border-top: 1px solid #c7c2c2;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;

  height: 40px;

  img {
    width: 24px;
    height: 24px;
  }
  input {
    margin-left: 10px;
    width: 399px;
  }
  button {
    border: 0;
    background-color: transparent;
    div {
      width: 28px;
      height: 18px;
      font-size: 14px;
      font-weight: bold;
      color: gray;
      padding: 0;
    }
  }
`;
