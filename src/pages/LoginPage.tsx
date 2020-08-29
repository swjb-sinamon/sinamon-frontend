import React from 'react';
import styled from 'styled-components';
import { Heading1 } from 'src/atomics/Typography/Heading';
import { ReactComponent as Friends } from 'src/assets/friends.svg';
import BlankLine from 'src/utils/BlankLine';
import Label from 'src/atomics/Form/Label';
import Input from 'src/atomics/Form/Input';
import ButtonGroup from '../components/ButtonGroup';
import { MediumButton } from '../atomics/Button';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
              <MediumButton>회원가입</MediumButton>
            </ButtonGroup>
          </div>
        </StyledForm>
      </GridContainer>
    </Container>
  );
};

export default LoginPage;
