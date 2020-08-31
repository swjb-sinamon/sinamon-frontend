import React from 'react';
import styled from 'styled-components';
import BlankLine from 'src/utils/BlankLine';
import { HugeButton } from 'src/atomics/Button';
import RegisterHeaderText from 'src/components/Register/RegisterHeaderText';
import RegisterFooterText from 'src/components/Register/RegisterFooterText';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  border-radius: 3px;
  border: 1px solid var(--color-gray);
  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  & > button {
    margin-bottom: 10px;
  }
`;

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <div>
        <RegisterHeaderText/>

        <BlankLine gap={30}/>

        <Form>
          <RegisterFooterText/>
        </Form>

        <BlankLine gap={30}/>

        <ButtonWrapper>
          <HugeButton>회원가입</HugeButton>
        </ButtonWrapper>
      </div>
    </Container>
  );
};

export default RegisterPage;
