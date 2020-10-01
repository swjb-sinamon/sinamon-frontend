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
`;

const StyledTitle = styled(Heading1)`
  font-size: 26px;

  cursor: pointer;
  &:hover {
    color: var(--color-button-hover);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    color: var(--color-button-hover);
  }
`;

interface MobileTitleProps {
  readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileTitle: React.FC<MobileTitleProps> = ({ setOpen }) => {
  const onBuggerClick = () => {
    setOpen((current) => !current);
  };

  return (
    <MobileTitleContainer>
      <StyledTitle>수정과</StyledTitle>
      <StyledIcon icon={faBars} size="lg" onClick={onBuggerClick} />
    </MobileTitleContainer>
  );
};

export default MobileTitle;
