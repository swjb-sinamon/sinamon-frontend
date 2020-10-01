import React from 'react';
import styled from 'styled-components';
import { Heading3 } from '../../atomics/Typography/Heading';
import SCREEN_SIZE from '../../styles/screen-size';

const AboutContainer = styled.div`
  text-align: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const MyInfoTitle: React.FC = () => {
  return (
    <AboutContainer>
      <Heading3>[학과]과 [학년]학년 [반]반</Heading3>
      <Heading3>[이름] 님</Heading3>
    </AboutContainer>
  );
};

export default MyInfoTitle;
