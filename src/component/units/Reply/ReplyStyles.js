import styled from 'styled-components';
import { breakPoints } from '../../commons/media';

export const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ReplyImg = styled.img`
  width: 16px;
  margin-right: 10px;
`;
export const ReplyInput = styled.input`
  width: 80%;
  background-color: none;
  ::placeholder {
    font-size: 10px;
  }
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const Comment = styled.div`
  display: ${(props) => (props.isDisplay ? 'flex' : 'none')};
  gap: 10px;
  font-size: 14px;
`;
export const Overlay = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const OverlayReply = styled.div`
  display: flex;
  position: relative;
  max-width: 1000px;
  max-height: 700px;
  margin: auto;
  height: 100%;
  /* width: 100%; */
  background-color: white;
  border-radius: 0 4px 4px 0;
  z-index: 11;
`;
export const FeedImg = styled.img`
  max-width: 700px;
  width: 100%;
  background-color: black;
`;

export const FeedContent = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  padding: 10px 0;
  border: 1px solid #c7c2c2;
  @media ${breakPoints.mobile} {
  }
`;
export const Header = styled.header`
  padding: 0 16px;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #c7c2c2;
  align-items: center;
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
  width: ${(props) => (props.small ? '24px' : '30px')};
  height: ${(props) => (props.small ? '24px' : '30px')};
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
export const Contents = styled.div`
  height: 100%;
  display: block;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 10px;
  border-bottom: 1px solid #c7c2c2;
`;
export const Content = styled.div`
  display: flex;
  padding-left: 2px;
  align-items: center;
`;
export const ReplyContent = styled.div`
  display: inline;
  font-size: 12px;
`;
export const Menu = styled.div`
  padding: 0 16px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c7c2c2;
`;
export const Icon = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 12px;
    color: gray;
  }
`;
export const Writing = styled.div`
  padding: 6px 16px;
  padding: 6px 16px;
  border-top: 1px solid #c7c2c2;
  z-index: 11;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  padding-top: 10px;
  width: 100%;
`;

export const Submit = styled.button`
  background-color: white;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  color: #3e99df;
  :hover {
    font-weight: 600;
  }
`;

export const Button = styled.button`
  color: gray;
  width: fit-content;
  background-color: white;
  cursor: pointer;
  margin: 2px 0;
  padding: 0;
  span {
    font-size: 10px;
  }
  :hover {
    color: black;
  }
`;
