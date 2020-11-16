import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSchool, faSignOutAlt, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import MainSideBarItem from './MainSideBarItem';
import SCREEN_SIZE from '../../styles/screen-size';
import MainTitleBar from '../MainTitleBar';
import Api from '../../api';
import showToast from '../../utils/Toast';
import NoStyleA from '../../atomics/NoStyleA';

const Sidebar = styled.ul`
  min-height: 100vh;
  background-color: white;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  display: flex;
  flex-direction: column;

  list-style: none;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    min-height: 4rem;
  }
`;

const ItemList = styled.ul<{ isOpen: boolean }>`
  display: block;
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

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
    <Sidebar>
      <MainTitleBar setOpen={setOpen} />

      <ItemList isOpen={isOpen}>
        <MainSideBarItem tabIndex={0}>
          <FontAwesomeIcon icon={faUmbrella} size="lg" />
          &nbsp;
          <p>우산대여제</p>
        </MainSideBarItem>

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
      </ItemList>
    </Sidebar>
  );
};

export default MainSideBar;
