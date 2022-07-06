import React from 'react';
import * as S from './LoginStyles';

export default function LoginUI(props) {
  return (
    <S.LoginWrapper>
      <S.Form onSubmit={props.LoginButton}>
        <S.MainImg src={'/Login/instargram.png'} />
        <S.InputWrapper>
          <S.Input
            valid={props.emailValid}
            onChange={props.onChangeEmail}
            ref={props.emailRef}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></S.Input>
          <S.Input
            valid={props.passwordValid}
            onChange={props.onChangePassword}
            ref={props.passwordRef}
            type="password"
            placeholder="비밀번호"
          ></S.Input>
        </S.InputWrapper>
        <S.Button
          passwordValid={props.passwordValid}
          emailValid={props.emailValid}
        >
          로그인
        </S.Button>
        <S.Division>
          <S.Mark></S.Mark>
        </S.Division>
        <S.FacebookWrapper>
          <S.Facebook src={'/Login/Facebook.png'} />
          <S.FacebookFont>Facebook으로 로그인</S.FacebookFont>
        </S.FacebookWrapper>
        <S.FindPassword>비밀번호를 잊으셨나요?</S.FindPassword>
      </S.Form>
      <S.SignUpWrapper>
        <S.SignUpFont>계정이 없으신가요?</S.SignUpFont>
        <S.SignUpButton>가입하기</S.SignUpButton>
      </S.SignUpWrapper>

      <S.AppDownFont>앱을 다운로드하세요.</S.AppDownFont>
      <S.AppDownWrapper>
        <S.AppStore src={'/Login/appStore.png'} />
        <S.GooglePlay src={'/Login/playStore.png'} />
      </S.AppDownWrapper>
    </S.LoginWrapper>
  );
}
