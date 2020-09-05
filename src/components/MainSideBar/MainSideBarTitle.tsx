import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { Heading1, Heading3 } from 'src/atomics/Typography/Heading';

const SideBarTitle = styled.li`
  width: 100%;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--color-gray);
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
`;

const AboutContainer = styled.div`
  text-align: center;
`;

const MainSideBarTitle: React.FC = () => {
  return (
    <SideBarTitle>
      <div>
        <TitleContainer>
          <FontAwesomeIcon icon={faWineGlassAlt} size="2x" />
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
