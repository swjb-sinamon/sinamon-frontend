import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcaseMedical,
  faCalendarWeek,
  faUmbrella,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  MainSidebar,
  MainSideBarItem,
  NoStyleA,
  NoStyleLink,
  showToast,
  SideBarIconWrapper,
  SideBarItemList
} from 'sinamon-sikhye';
import MainTitleBar from '../MainTitleBar';
import Api from '../../api';

const StyledFooterText = styled.p`
  text-align: center;

  margin: 1rem 0;

  color: var(--color-subtext);
`;

const FooterButton = styled.button`
  border: none;
  background-color: transparent;

  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  color: var(--color-subtext);

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
  }
`;

const MainSideBar: React.FC = () => {
  const history = useHistory();
  const [isOpen, setOpen] = useState<boolean>(false);

  const onLogoutClick = async () => {
    const isLogout = window.confirm('정말로 로그아웃 하시겠습니까?');
    if (!isLogout) return;
    await Api.delete('/auth/logout');
    showToast('다음에 또 찾아와주세요!', 'success');

    history.push('/');
    window.location.reload();
  };

  return (
    <MainSidebar>
      <MainTitleBar setOpen={setOpen} />

      <SideBarItemList isOpen={isOpen}>
        <NoStyleLink to="/umbrella">
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faUmbrella} size="lg" />
            </SideBarIconWrapper>
            <p>우산대여제</p>
          </MainSideBarItem>
        </NoStyleLink>

        <NoStyleLink to="/timetable">
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faCalendarWeek} size="lg" />
            </SideBarIconWrapper>
            <p>시간표 보기</p>
          </MainSideBarItem>
        </NoStyleLink>

        <NoStyleA
          href="https://www.facebook.com/swjbgh1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </SideBarIconWrapper>
            <p>익명 페이지</p>
          </MainSideBarItem>
        </NoStyleA>

        <NoStyleA href="https://www.facebook.com/swjb0/" target="_blank" rel="noopener noreferrer">
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </SideBarIconWrapper>
            <p>학생회 페이지</p>
          </MainSideBarItem>
        </NoStyleA>

        <NoStyleA
          href="https://hcs.eduro.go.kr/#/loginHome"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faBriefcaseMedical} size="lg" />
            </SideBarIconWrapper>
            <p>자가진단 페이지</p>
          </MainSideBarItem>
        </NoStyleA>

        <NoStyleLink to="/account">
          <MainSideBarItem>
            <SideBarIconWrapper>
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </SideBarIconWrapper>
            <p>내 계정</p>
          </MainSideBarItem>
        </NoStyleLink>

        <StyledFooterText>
          <FooterButton onClick={onLogoutClick}>로그아웃</FooterButton>
          <br />
          <FooterButton onClick={() => history.push('/privacy')}>
            개인정보처리방침
          </FooterButton>{' '}
          &middot; <FooterButton onClick={() => history.push('/tos')}>이용약관</FooterButton>
        </StyledFooterText>
      </SideBarItemList>
    </MainSidebar>
  );
};

export default MainSideBar;
