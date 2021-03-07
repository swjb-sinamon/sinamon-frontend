import React from 'react';
import styled from 'styled-components';
import { Heading3, SCREEN_SIZE } from 'sinamon-sikhye';
import { useProfile } from '../../hooks/useProfile';
import convertDepartmentIdToString from '../../utils/Converter/Department';

const AboutContainer = styled.div`
  text-align: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: none;
  }
`;

const MyInfoTitle: React.FC = () => {
  const profile = useProfile();

  if (!profile) {
    return (
      <AboutContainer>
        <Heading3>수정과</Heading3>
        <Heading3>불러오는 중...</Heading3>
      </AboutContainer>
    );
  }

  return (
    <AboutContainer>
      <Heading3>
        {convertDepartmentIdToString(profile.department)} {profile.studentGrade}학년{' '}
        {profile.studentClass}반
      </Heading3>
      <Heading3>{profile.name} 님</Heading3>
    </AboutContainer>
  );
};

export default MyInfoTitle;
