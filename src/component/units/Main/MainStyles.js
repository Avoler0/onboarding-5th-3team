import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 1px -1px lightgray;
  display: ${(props) => (props.load ? 'flex' : 'none')};
  flex-direction: column;
`;
export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: gray;
`;
export const Head = styled.div`
  margin-left: 10px;
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 10px 0px 20px 10px;
  display: flex;
  justify-content: flex-start;
`;
export const LikeImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
export const CommentImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
export const MsgImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
export const Like = styled.div`
  margin: 0px 10px 10px 10px;
  font-size: 8px;
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
