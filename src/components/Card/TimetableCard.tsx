import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from 'sinamon-sikhye';
import { ComciganTimetableType } from '../../types/Payload';
import Api from '../../api';
import { useProfile } from '../../hooks/useProfile';
import { convertClassToFullClass } from '../../utils/Converter/SchoolNumber';
import TimetableItem from '../Timetable/TimetableItem';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTipText = styled.span`
  font-size: 14px;
  color: var(--color-subtext);

  margin-left: 10px;
  line-height: 2.5;
`;

const TimeTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  text-align: center;
`;

const MoreButton = styled.button`
  width: 60px;
  height: 30px;
  border: 1px var(--color-gray) solid;
  border-radius: 50px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray);
  }
`;

const day = ['일', '월', '화', '수', '목', '금', '토'];
const today = new Date().getDay();

const TimetableCard: React.FC = () => {
  const [timetable, setTimetable] = useState<ComciganTimetableType[][]>([]);
  const profile = useProfile();

  useEffect(() => {
    if (!profile) return;

    Api.get(
      `/timetable/${profile.studentGrade}/${convertClassToFullClass(
        profile.department,
        profile.studentClass
      )}`
    ).then((res) => {
      if (res.data && res.data.success) {
        setTimetable(res.data.data);
      }
    });
  }, [profile]);

  return (
    <Card columnStart={1} columnEnd={5} rowStart={2} rowEnd={3}>
      <CardHeader>
        <LeftHeader>
          <CardTitle>
            <span role="img" aria-label="clock">
              ⏱
            </span>
            무엇을 배울까?
          </CardTitle>
          <StyledTipText>과목명을 클릭하여 줌에 접속하세요</StyledTipText>
        </LeftHeader>

        <MoreButton>더보기</MoreButton>
      </CardHeader>

      <TimeTableContainer>
        {timetable.map((value, index) => (
          <TimetableItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            day={`${day[index + 1]}`}
            data={value}
            active={index + 1 === today}
          />
        ))}
      </TimeTableContainer>
    </Card>
  );
};

export default TimetableCard;
