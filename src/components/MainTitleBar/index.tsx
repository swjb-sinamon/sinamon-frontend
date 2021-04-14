import React from 'react';
import styled from 'styled-components';
import { Heading1, NoStyleLink, SCREEN_SIZE } from 'sinamon-sikhye';
import MyInfoTitle from './MyInfoTitle';
import MobileTitle from './MobileTitle';
import Logo from '../../assets/logo.png';

const SideBarTitle = styled.li`
  width: 100%;
  height: 280px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    height: 100%;
    border: none;

    display: block;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  margin-bottom: 1.5rem;

  &:hover {
    color: var(--color-button-hover);
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const LogoTitle = styled(Heading1)`
  font-size: 28px;
  margin-top: 7px;
  margin-left: 5px;
`;

interface MainTitleBarProps {
  readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainTitleBar: React.FC<MainTitleBarProps> = ({ setOpen }) => {
  return (
    <SideBarTitle>
      <div>
        <NoStyleLink to="/">
          <TitleContainer>
            <img src={Logo} alt="수정과" width={60} height={60} />
            <LogoTitle>수정과</LogoTitle>
          </TitleContainer>
        </NoStyleLink>

        <MobileTitle setOpen={setOpen} />
        <MyInfoTitle />
      </div>
    </SideBarTitle>
  );
};

export default MainTitleBar;
