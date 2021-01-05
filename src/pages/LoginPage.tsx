import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import {
  BlankLine,
  ButtonGroup,
  Heading1,
  Input,
  Label,
  MediumButton,
  SCREEN_SIZE,
  showToast
} from 'sinamon-sikhye';

import TextLoop from 'react-text-loop';
import { Helmet } from 'react-helmet';
import Api from '../api';
import ErrorMessage from '../error/ErrorMessage';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: block;
  }
`;

const Intro = styled.div`
  margin-top: 2rem;

  & > * {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const LoopText = styled(Heading1)`
  color: var(--color-button-hover);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 36px;
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
`;

const SnowfallWrapper = styled.div`
  display: block;
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

interface LoginState {
  readonly id: string;
  readonly password: string;
}

const LoginPage: React.FC = () => {
  const [input, setInput] = useState<LoginState>({
    id: '',
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
    if (input.id.trim() === '' || input.password.trim() === '') {
      showToast('❗ 아이디 또는 비밀번호가 빈칸입니다.', 'danger');
      return;
    }

    try {
      await Api.post('/auth/login?admin=false', {
        id: input.id,
        password: input.password
      });

      showToast('🎉 로그인 성공! 메인 페이지로 이동합니다.', 'success');
    } catch (e) {
      if (!e.response.data) return;
      const { success, error } = e.response.data;
      if (success || !error) return;

      if (error === ErrorMessage.USER_NOT_FOUND) {
        showToast('💡 존재하지 않는 아이디이거나 잘못된 비밀번호입니다.', 'danger');
        setInput((prev) => ({ ...prev, password: '' }));
      }
    }
  };

  const onEnterKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') await onLoginClick();
  };

  return (
    <>
      <Helmet>
        <title>로그인 - 수정과</title>
      </Helmet>

      <Container>
        <GridContainer>
          <Intro>
            <Heading1>🎈 편리한 학교 생활, 수정과와 함께</Heading1>
            <TextLoop interval={2000}>
              <LoopText>방과후신청을</LoopText>
              <LoopText>행사 확인을</LoopText>
              <LoopText>우산 빌리기를</LoopText>
              <LoopText>시간표 확인을</LoopText>
              <LoopText>급식 보기를</LoopText>
            </TextLoop>
            <Heading1>해보세요!</Heading1>
          </Intro>

          <StyledForm>
            <div>
              <Heading1>수정과 로그인</Heading1>

              <BlankLine gap={30} />

              <Label>아이디</Label>
              <Input
                placeholder="아이디"
                type="text"
                value={input.id}
                onChange={(e) => onInputChange(e, 'id')}
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

        <SnowfallWrapper>
          <Snowfall snowflakeCount={200} />
        </SnowfallWrapper>
      </Container>
    </>
  );
};

export default LoginPage;
