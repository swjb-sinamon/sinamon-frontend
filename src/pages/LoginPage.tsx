import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../atomics/Typography/Heading';
import { ReactComponent as Friends } from '../assets/friends.svg';
import BlankLine from '../utils/BlankLine';
import Label from '../atomics/Form/Label';
import Input from '../atomics/Form/Input';
import ButtonGroup from '../components/ButtonGroup';
import { MediumButton } from '../atomics/Button';
import { Link } from 'react-router-dom';
import SCREEN_SIZE from '../styles/screen-size';

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

const LoginPage: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <StyledSVG width={600} height={600} />
        <StyledForm>
          <div>
            <Heading1>수정과 로그인</Heading1>

            <BlankLine gap={30} />

            <Label>이메일</Label>
            <Input placeholder="이메일" type="email" />

            <BlankLine gap={20} />

            <Label>비밀번호</Label>
            <Input placeholder="비밀번호" type="password" />

            <BlankLine gap={30} />
            <ButtonGroup>
              <MediumButton>로그인</MediumButton>
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
