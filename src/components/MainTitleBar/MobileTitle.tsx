import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Heading1, SCREEN_SIZE, NoStyleLink } from 'sinamon-sikhye';
import Logo from '../../assets/logo.png';

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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    color: var(--color-button-hover);
  }
`;

const StyledTitle = styled(Heading1)`
  display: inline-block;
  font-size: 20px;

  margin-top: 7px;
  margin-left: 2px;
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
      <NoStyleLink to="/">
        <LogoContainer>
          <img src={Logo} alt="수정과" width={38} height={38} />
          <StyledTitle>수정과</StyledTitle>
        </LogoContainer>
      </NoStyleLink>

      <StyledIcon icon={faBars} size="lg" onClick={onBuggerClick} />
    </MobileTitleContainer>
  );
};

export default MobileTitle;
