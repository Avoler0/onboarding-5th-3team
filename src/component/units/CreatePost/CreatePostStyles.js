import styled from 'styled-components';

export const CreatePost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
  max-height: calc(100% - 40px);
  min-height: 391px;
  max-width: 1000px;
  min-width: 688px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: #262626;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Body = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;
export const BodyLeft = styled.div`
  border-right: #262626;
  width: 50%;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const BodyRight = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserInfo = styled.div`
  font-weight: bold;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;
export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #efefef;
  margin-right: 10px;
`;
export const TextInput = styled.textarea`
  width: 100%;
  height: 80%;
  resize: none;
`;

export const LetterCount = styled.div`
  height: 10%;
  text-align: right;
  color: #262626;
`;
// export const Wrapper = styled.div`
//   max-width: 470px;
//   width: 100%;
//   border: 1px solid lightgray;
//   box-shadow: 1px 1px 1px -1px lightgray;
//   flex-direction: column;
//   background-color: white;
//   display: ${(props) => (props.load ? 'flex' : 'none')};
// `;
// export const HeadWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
// `;
