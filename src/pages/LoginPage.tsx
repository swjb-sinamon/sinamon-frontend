import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading1 } from '../atomics/Typography/Heading';
import { ReactComponent as Friends } from '../assets/friends.svg';
import BlankLine from '../utils/BlankLine';
import Label from '../atomics/Form/Label';
import Input from '../atomics/Form/Input';
import ButtonGroup from '../components/ButtonGroup';
import { MediumButton } from '../atomics/Button';
import SCREEN_SIZE from '../styles/screen-size';
import Api from '../api';
import ErrorMessage from '../error/ErrorMessage';
import showToast from '../utils/Toast';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: block;
  }
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
`;

const StyledSVG = styled(Friends)`
  margin-right: -10px;
  grid-column: 1 / 2;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

interface LoginState {
  readonly email: string;
  readonly password: string;
}

const LoginPage: React.FC = () => {
  const [input, setInput] = useState<LoginState>({
    email: '',
    password: ''
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof LoginState) => {
    e.persist();

    setInput((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  const onLoginClick = async () => {
    if (input.email.trim() === '' || input.password.trim() === '') {
      showToast('❗ 이메일 또는 비밀번호가 빈칸입니다.', 'danger');
      return;
    }

    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(input.email)) {
      showToast('❗ 올바른 이메일이 아닙니다.', 'danger');
      return;
    }

    try {
      await Api.post('/auth/login', {
        email: input.email,
        password: input.password
      });

      showToast('🎉 로그인 성공! 메인 페이지로 이동합니다.', 'success');
      window.location.reload();
    } catch (e) {
      if (!e.response.data) return;
      const { success, error } = e.response.data;
      if (success || !error) return;

      if (error === ErrorMessage.USER_NOT_FOUND) {
        setInput({ email: '', password: '' });
      }
    }
  };

  const onEnterKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') await onLoginClick();
  };

  return (
    <Container>
      <GridContainer>
        <StyledSVG width={600} height={600} />
        <StyledForm>
          <div>
            <Heading1>수정과 로그인</Heading1>

            <BlankLine gap={30} />

            <Label>이메일</Label>
            <Input
              placeholder="이메일"
              type="email"
              value={input.email}
              onChange={(e) => onInputChange(e, 'email')}
            />

            <BlankLine gap={20} />

            <Label>비밀번호</Label>
            <Input
              placeholder="비밀번호"
              type="password"
              value={input.password}
              onChange={(e) => onInputChange(e, 'password')}
              onKeyPress={onEnterKeyPress}
            />

            <BlankLine gap={30} />
            <ButtonGroup>
              <MediumButton onClick={onLoginClick}>로그인</MediumButton>
              <Link to="/register">
                <MediumButton>회원가입</MediumButton>
              </Link>
            </ButtonGroup>
          </div>
        </StyledForm>
      </GridContainer>
    </Container>
  );
};

export default LoginPage;
