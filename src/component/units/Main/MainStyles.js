import styled from 'styled-components';
import { breakPoints } from '../../commons/media';

export const Wrapper = styled.div`
  max-width: 470px;
  width: 100%;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 1px -1px lightgray;
  flex-direction: column;
  background-color: white;
  display: ${(props) => (props.load ? 'flex' : 'none')};
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
  background-color: #efefef;
`;
export const Head = styled.div`
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const LikeImg = styled.div`
  display: inline-block;
  width: 5%;
  margin-right: 10px;
  color: ${(props) => (props.enabled ? 'red' : '')};
`;
export const IconImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
export const MsgImg = styled.img`
  width: 5%;
  margin-right: 10px;
`;
export const Like = styled.div`
  margin: 0px 10px 10px 10px;
  font-size: 14px;
  font-weight: bold;
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  padding: 0 10px;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;
export const ReplyShow = styled.div`
  display: block;
  @media ${breakPoints.mobile} {
    display: none;
  }
  margin: 0px 10px 10px 10px;
  font-size: 14px;
  color: #998f8f;
`;
export const MSection = styled.section`
  display: flex;
  margin-top: 4px;
  padding: 0 12px;
  /* border-top: 1px solid #c7c2c2; */
  font-size: 14px;
  font-weight: bold;
`;
export const MIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    padding: 8px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
  }
`;
