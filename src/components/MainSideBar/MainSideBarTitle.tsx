import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { Heading1, Heading3 } from '../../atomics/Typography/Heading';
import SCREEN_SIZE from '../../styles/screen-size';

const SideBarTitle = styled.li`
  width: 100%;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--color-gray);

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    height: 100%;
    border: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  margin-bottom: 1.2rem;

  &:hover {
    color: var(--color-button-hover);
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    margin-bottom: 0;
    margin-top: -10px;
    display: grid;
    place-items: center;
  }
`;

const IconWrapper = styled(FontAwesomeIcon)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const AboutContainer = styled.div`
  text-align: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const MainSideBarTitle: React.FC = () => {
  return (
    <SideBarTitle>
      <div>
        <TitleContainer>
          <IconWrapper icon={faWineGlassAlt} size="2x" />
          &nbsp;
          <Heading1>수정과</Heading1>
        </TitleContainer>
        <AboutContainer>
          <Heading3>[학과]과 [학년]학년 [반]반</Heading3>
          <Heading3>[이름] 님</Heading3>
        </AboutContainer>
      </div>
    </SideBarTitle>
  );
};

export default MainSideBarTitle;
