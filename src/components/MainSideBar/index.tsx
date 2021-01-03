import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSchool, faSignOutAlt, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  showToast,
  MainSidebar,
  SideBarItemList,
  MainSideBarItem,
  NoStyleA,
  NoStyleLink
} from 'sinamon-sikhye';
import MainTitleBar from '../MainTitleBar';
import Api from '../../api';

const StyledFooterText = styled.p`
  text-align: center;

  margin: 2rem 0;

  color: var(--color-subtext);
`;

const PrivacyButton = styled.button`
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
    showToast('👋 다음에 또 찾아와주세요!', 'success');
    window.location.reload();
  };

  return (
    <MainSidebar>
      <MainTitleBar setOpen={setOpen} />

      <SideBarItemList isOpen={isOpen}>
        <NoStyleLink to="/umbrella">
          <MainSideBarItem>
            <FontAwesomeIcon icon={faUmbrella} size="lg" />
            &nbsp;
            <p>우산대여제</p>
          </MainSideBarItem>
        </NoStyleLink>

        <MainSideBarItem tabIndex={0} onClick={() => showToast('준비중입니다.', 'info')}>
          <FontAwesomeIcon icon={faBook} size="lg" />
          &nbsp;
          <p>시간표 보기</p>
        </MainSideBarItem>

        <MainSideBarItem tabIndex={0} onClick={() => showToast('준비중입니다.', 'info')}>
          <FontAwesomeIcon icon={faSchool} size="lg" />
          &nbsp;
          <p>방과후학교</p>
        </MainSideBarItem>

        <NoStyleA
          href="https://www.facebook.com/swjbgh1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainSideBarItem>
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
            &nbsp;
            <p>익명 페이지</p>
          </MainSideBarItem>
        </NoStyleA>

        <NoStyleA href="https://www.facebook.com/swjb0/" target="_blank" rel="noopener noreferrer">
          <MainSideBarItem>
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
            &nbsp;
            <p>학생회 페이지</p>
          </MainSideBarItem>
        </NoStyleA>

        <MainSideBarItem onClick={onLogoutClick} tabIndex={0}>
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          &nbsp;
          <p>로그아웃</p>
        </MainSideBarItem>

        <StyledFooterText>
          <PrivacyButton onClick={() => history.push('/privacy')}>개인정보처리방침</PrivacyButton>{' '}
          &middot; <PrivacyButton onClick={() => history.push('/tos')}>이용약관</PrivacyButton>
        </StyledFooterText>
      </SideBarItemList>
    </MainSidebar>
  );
};

export default MainSideBar;
