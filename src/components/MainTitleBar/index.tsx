import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { Heading1 } from '../../atomics/Typography/Heading';
import SCREEN_SIZE from '../../styles/screen-size';
import MyInfoTitle from './MyInfoTitle';
import MobileTitle from './MobileTitle';

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

    display: block;
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
    display: none;
  }
`;

interface MainTitleBarProps {
  readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainTitleBar: React.FC<MainTitleBarProps> = ({ setOpen }) => {
  return (
    <SideBarTitle>
      <div>
        <TitleContainer>
          <FontAwesomeIcon icon={faWineGlassAlt} size="2x" />
          &nbsp;
          <Heading1>수정과</Heading1>
        </TitleContainer>

        <MobileTitle setOpen={setOpen} />
        <MyInfoTitle />
      </div>
    </SideBarTitle>
  );
};

export default MainTitleBar;
