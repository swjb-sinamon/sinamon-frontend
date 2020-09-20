import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCalendarDay,
  faHammer,
  faSignOutAlt,
  faUmbrella
} from '@fortawesome/free-solid-svg-icons';
import MainSideBarTitle from './MainSideBarTitle';
import MainSideBarItem from './MainSideBarItem';

const Sidebar = styled.ul`
  min-height: 100vh;
  background-color: white;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  display: flex;
  flex-direction: column;

  list-style: none;
`;

const MainSideBar: React.FC = () => {
  return (
    <Sidebar>
      <MainSideBarTitle />

      <MainSideBarItem>
        <FontAwesomeIcon icon={faUmbrella} size="lg" />
        &nbsp;
        <p>우산대여제</p>
      </MainSideBarItem>
      <MainSideBarItem>
        <FontAwesomeIcon icon={faHammer} size="lg" />
        &nbsp;
        <p>실습실 대여</p>
      </MainSideBarItem>
      <MainSideBarItem>
        <FontAwesomeIcon icon={faBook} size="lg" />
        &nbsp;
        <p>온라인 시간표</p>
      </MainSideBarItem>
      <MainSideBarItem>
        <FontAwesomeIcon icon={faCalendarDay} size="lg" />
        &nbsp;
        <p>학사 일정</p>
      </MainSideBarItem>
      <MainSideBarItem>
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        &nbsp;
        <p>로그아웃</p>
      </MainSideBarItem>
    </Sidebar>
  );
};

export default MainSideBar;
