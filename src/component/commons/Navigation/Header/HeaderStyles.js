import styled from 'styled-components';
import { breakPoints } from '../../media';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SearchImg = styled.img`
  width: 15px;
  margin-left: 5px;
  position: absolute;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 25px;
  border-radius: 10px;
  background-color: lightgray;
`;
export const MainImg = styled.img`
  cursor: pointer;
`;
export const NavIcon = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Home = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
export const Msg = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
export const Write = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
export const Navi = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
export const Pick = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
export const Logout = styled.img`
  width: 16%;
  margin-right: 15%;
  cursor: pointer;
`;
