import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../atomics/Typography/Heading';
import SCREEN_SIZE from '../styles/screen-size';
import BlankLine from '../utils/BlankLine';
import { PrivacySubTitle, PrivacyTitle } from '../atomics/Typography/PrivacyTitle';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  padding: 1rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 600px;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 350px;
  }
`;

const ToSPage: React.FC = () => {
  return (
    <Container>
      <PrivacyTitle>수정과</PrivacyTitle>
      <PrivacySubTitle>이용약관</PrivacySubTitle>
      <BlankLine gap={20} />
      <div>
        <Heading2>1. 제목</Heading2>
        <p>내용</p>
      </div>
      <BlankLine gap={10} />
    </Container>
  );
};

export default ToSPage;
