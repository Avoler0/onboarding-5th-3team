import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  width: 550px;
  background-color: #eeeeee;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: white;
  margin-bottom: 15px;
`;

export const MainImg = styled.img`
  width: 200px;
  margin: 40px 0px 40px 0px;
`;

export const Label = styled.div`
  margin-bottom: 5%;
  font-size: 20px;
`;

export const EmailInput = styled.input`
  border-radius: 5px;
  border: ${(props) =>
    props.emailValid ? '1px solid #eeeeee' : '1px solid #f77167'};
  width: 400px;
  height: 50px;
  padding-left: 5px;
  margin-bottom: 20px;
  font-size: 15px;
`;

export const PasswordInput = styled.input`
  border-radius: 5px;
  border: ${(props) =>
    props.passwordValid ? '1px solid #eeeeee' : '1px solid #f77167'};
  width: 400px;
  height: 50px;
  padding-left: 5px;
  margin-bottom: 20px;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 400px;
  height: 40px;
  margin-bottom: 40px;
  background-color: ${(props) =>
    props.passwordValid && props.emailValid ? '#2c88dd' : '#9fc5e8'};
  border-radius: 5px;
  font-size: 17px;
  color: white;
  cursor: pointer;
`;

export const Division = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Mark = styled.div`
  width: 150px;
  border-bottom: 2px solid #eeeeee;
`;

export const Or = styled.div`
  margin: 0px 30px 0px 30px;
  line-height: 0px;
  font-size: 15px;
`;

export const FacebookWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
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
  margin-bottom: 30px;
  color: #3d85c6;
  font-weight: bold;
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
  width: 500px;
  padding: 30px;
  margin-bottom: 30px;
  background-color: white;
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
  margin-bottom: 30px;
`;

export const AppDownWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppStore = styled.img`
  margin-right: 10px;
`;

export const GooglePlay = styled.img``;
