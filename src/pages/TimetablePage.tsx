import React from 'react';
import styled from 'styled-components';
import {
  BlankLine,
  Heading1,
  Heading3,
  Label,
  MainSideBarContainer,
  SCREEN_SIZE
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet';
import MainSideBar from '../components/MainSideBar';
import TimetableItem from '../components/Timetable/TimetableItem';
import { useTimetable } from '../hooks/useTimetable';

const StyledContent = styled.div`
  margin: 3rem;
`;

const TimetableList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;

  grid-gap: 2rem;

  width: 1000px;
  padding: 1rem;

  background-color: white;
  border-radius: 3px;
  border: 1px solid var(--color-gray);

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 100%;

    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

const day = ['일', '월', '화', '수', '목', '금', '토'];
const today = new Date().getDay();

const TimetablePage: React.FC = () => {
  const timetable = useTimetable();

  return (
    <>
      <Helmet>
        <title>시간표 - 수정과</title>
      </Helmet>

      <MainSideBarContainer>
        <MainSideBar />

        <StyledContent>
          <Heading1>시간표 보기</Heading1>
          <Heading3>시간표를 확인해보세요.</Heading3>
          <Heading3>추후 줌 바로가기 기능이 업데이트 됩니다!</Heading3>

          <BlankLine gap={30} />

          <TimetableList>
            {timetable.map((value, index) => (
              <TimetableItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                day={`${day[index + 1]}`}
                data={value}
                active={index + 1 === today}
              />
            ))}
          </TimetableList>

          <BlankLine gap={10} />

          <Label>* 수정과에서는 시간표 오류에 따른 책임을 지지 않습니다.</Label>
          <Label>* 4시간 주기로 시간표를 새로고침합니다.</Label>
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};

export default TimetablePage;
