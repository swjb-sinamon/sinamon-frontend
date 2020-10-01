import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Heading1 } from '../../atomics/Typography/Heading';
import SCREEN_SIZE from '../../styles/screen-size';

const MobileTitleContainer = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }

  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2px;
  padding: 0 1.6rem;

  cursor: pointer;

  & > *:hover {
    color: var(--color-button-hover);
  }
`;

const StyledTitle = styled(Heading1)`
  font-size: 26px;
`;

const MobileTitle: React.FC = () => {
  return (
    <MobileTitleContainer>
      <StyledTitle>수정과</StyledTitle>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </MobileTitleContainer>
  );
};

export default MobileTitle;
