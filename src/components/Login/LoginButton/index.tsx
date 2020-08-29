import React from 'react';
import styled from 'styled-components';
import { MediumButton } from 'src/atomics/Button';

const ButtonGroup = styled.div`
  & button {
    margin-right: 1rem;
  }
  
  & button:last-child {
    margin-right: 0;
  }
`;

const LoginButton: React.FC = () => {
  return (
    <ButtonGroup>
      <MediumButton>로그인</MediumButton>
      <MediumButton>회원가입</MediumButton>
    </ButtonGroup>
  );
};

export default LoginButton;
