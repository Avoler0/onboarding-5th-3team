import styled from 'styled-components';
import { breakPoints } from '../../media';

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const Wrapper = styled.div`
  max-width: 945px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const MobileIcon = styled.img`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
  }
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const MainImg = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  max-width: 260px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SearchImg = styled.img`
  width: 15px;
  margin-left: 16px;
  position: absolute;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  border-radius: 6px;
  background-color: #efefef;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isSubHeader ? 'justify-content:space-between; width:100%;' : ''}
  gap: 24px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: ${(props) => (props.isDesktopOnly ? 'none' : 'block')};
  }
`;
