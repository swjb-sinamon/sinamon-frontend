import React from 'react';
import styled from 'styled-components';
import { Heading1, Heading3 } from 'sinamon-sikhye';

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const StyledHeading3 = styled(Heading3)`
  color: var(--color-button-hover);
`;

const RegisterHeaderText: React.FC = () => {
  return (
    <TitleContainer>
      <Heading1>수정과 회원가입</Heading1>
      <StyledHeading3>IT소프트웨어과 인트라넷 프로젝트</StyledHeading3>
    </TitleContainer>
  );
};

export default RegisterHeaderText;
