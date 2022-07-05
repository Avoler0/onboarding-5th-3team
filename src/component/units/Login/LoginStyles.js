import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
  gap: 10px;
  max-width: 350px;
  margin-top: 100px;
`;

export const Contents = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px 40px;
  border: 1px solid lightgray;
  gap: 22px;
`;

export const MainImg = styled.img`
  margin: 20px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: ${(props) =>
    props.valid ? '1px solid #eeeeee' : '1px solid #f77167'};
  width: 100%;
  height: 50px;
  padding-left: 20px;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;

  background-color: ${(props) =>
    props.passwordValid && props.emailValid ? '#2c88dd' : '#9fc5e8'};
  border-radius: 5px;
  font-size: 17px;
  color: white;
  cursor: pointer;
`;

export const Division = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const Mark = styled.div`
  width: 100%;
  border-bottom: 2px solid #eeeeee;
`;

export const Or = styled.div`
  width: 50%;
  text-align: center;
  line-height: 0px;
  font-size: 15px;
`;

export const FacebookWrapper = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #3d85c6;
  }
`;

export const Facebook = styled.img`
  width: 27px;
  height: 25px;
  margin-right: 5px;
`;
export const FacebookFont = styled.div`
  color: #3d85c6;
  line-height: 27px;
  font-weight: bold;
  font-size: 15px;
`;

export const FindPassword = styled.div`
  color: #3d85c6;
  font-size: 12px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #3d85c6;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 16px;
  background-color: white;
  border: 1px solid lightgray;
  width: 100%;
`;

export const SignUpFont = styled.div`
  font-size: 17px;
  margin-right: 10px;
`;

export const SignUpButton = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #3d85c6;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #3d85c6;
  }
`;

export const AppDownFont = styled.div`
  font-size: 17px;
  margin-bottom: 16px;
`;

export const AppDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  width: 100%;
  gap: 10px;
`;

export const StoreIcon = styled.img`
  width: 100%;
`;
