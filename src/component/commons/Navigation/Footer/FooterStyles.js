import styled from 'styled-components';
import { breakPoints } from '../../media';

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 480px) {
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
  }
`;
